from nextcode.packagelocal import package_and_upload
from nextcode import get_service

from urllib.parse import urlsplit

import logging
import time
import boto3
import os
import posixpath
import tempfile
import pytest
import sys
import uuid
import pprint


def pytest_addoption(parser):
    group = parser.getgroup("nc-wf")
    group.addoption(
        "--project",
        action="store",
        dest="project",
        help="Sets the name of the project to run the workflow in",
        default="no_project",
    )
    group.addoption(
        "--runid",
        action="store",
        dest="run_id",
        help="The name/id of the folder the workflow result_dir will be stored in",
        default=str(uuid.uuid4()),
    )
    group.addoption(
        "--runmode",
        action="store",
        dest="run_mode",
        type=str,
        choices=["repository", "local"],
        help="Specifies if you want to run your local copy of the workflow, or a version from Bitbucket",
        default="local",
    )
    group.addoption(
        "--revision",
        action="store",
        dest="revision",
        help="Specifies what revision should be run of the workflow repository",
    )
    group.addoption(
        "--repository",
        action="store",
        dest="repository",
        help="Specifies the Bitbucket repository containing the workflow",
    )
    group.addoption(
        "--localdir",
        action="store",
        dest="local_dir",
        help="Specifies what directory contains the workflow",
        default=".",
    )
    group.addoption(
        "--profile",
        action="store",
        dest="profile",
        help="Specifies the profile used to run the workflow",
        default="test",
    )

    group.addoption(
        "--use-last-run",
        action="store_true",
        dest="use_last_run",
        help="If specified the wf plugin will try to use the output from the last run instead of starting a new one",
    )

    parser.addini(
        "base_upload_bucket",
        "The S3 location the result_dir of the workflow will be set to",
        default="s3://nextcode-scratch/workflow-ci",
    )


# Let's suppress the wild logging of these libraries
logging.getLogger("requests.packages.urllib3.connectionpool").setLevel(logging.WARNING)
logging.getLogger("boto3").setLevel(logging.INFO)
logging.getLogger("botocore").setLevel(logging.WARNING)
logging.getLogger("s3transfer").setLevel(logging.INFO)
logging.getLogger("nextcode").setLevel(logging.INFO)
log = logging.getLogger(__name__)

start_time = 0


def pytest_report_header(config, startdir):

    return (
        "Running workflow in project '%s'. This can take some time so have some patience :)"
        % config.option.project
    )


def print_status(txt):
    d = time.time() - start_time
    print("[%.2fs] %s" % (d, txt))
    sys.stdout.flush()


@pytest.fixture(scope="class", autouse=False)
def run_workflow(request):
    svc = get_service("workflow")
    global start_time
    start_time = time.time()

    # Check if we should use the files generated by last run instead of starting a new one.
    use_last_run = request.config.option.use_last_run
    if use_last_run:
        print_status(
            "--use-last-run flag set. Using output files from the previous run."
        )
        prev_dir = request.config.cache.get("wf_plugin/latest_result_dir", None)
        if prev_dir:
            print_status("Previous file dir found: %s." % prev_dir)
            request.cls.result_dir = prev_dir
            return
        else:
            print_status("Previous file dir not found. Starting a new run.")

    base_result_dir = request.config.getini("base_upload_bucket")
    project_name = request.config.option.project
    run_mode = request.config.option.run_mode
    run_id = request.config.option.run_id
    profile = request.config.option.profile
    revision = None

    if run_mode == "repository":
        build_context = request.config.option.repository
        revision = request.config.option.revision
        build_source = "git"
        if not build_context:
            print("ERROR: Your must specify a --repository when --runmode = repository")
            sys.exit(-1)

    else:
        path = os.path.abspath(os.path.expanduser(request.config.option.local_dir))
        p = package_and_upload(svc, "local_workflow", path)
        build_source = "url"
        build_context = p

    # Add the parameters if the TestCase defines them
    params = request.cls.params if hasattr(request.cls, "params") else {}

    # add result_dir
    result_dir = "{prefix}/{run}/".format(prefix=base_result_dir, run=run_id)
    params["result_dir"] = result_dir
    print_status(
        "Workflow run parameters:\nWorkflow repository: %s:%s\nProject: %s\nProfile: %s\nParameters: %s"
        % (
            build_context,
            revision,
            project_name,
            profile,
            pprint.pformat(params, width=-1),
        )
    )

    job = svc.post_job(
        None,
        project_name,
        params,
        build_context,
        revision,
        build_source=build_source,
        build_context=build_context,
        profile=profile,
    )

    while job.running():
        time.sleep(5)
        job.refresh()
        print_status("Job %s status = %s" % (job.job_id, job.status))

    print_status("Job %s is no longer running. Status = %s" % (job.job_id, job.status))

    if not job.status == "COMPLETED":
        print_status(job.logs("pod", ""))
        raise Exception("Job did not complete successfully")

    temp_dir = tempfile.mkdtemp()

    _download_all(result_dir, temp_dir)

    request.cls.result_dir = temp_dir
    # Store the latest result dir in cache
    request.config.cache.set("wf_plugin/latest_result_dir", temp_dir)


def _download_all(s3_path, local_path):
    """Download all files from s3_path into the local folder"""
    s3 = boto3.resource("s3")
    parts = urlsplit(s3_path)
    bucket_name = parts.netloc
    bucket = s3.Bucket(bucket_name)  # pylint: disable=no-member
    print_status("Downloading from '{}' to '{}'...".format(s3_path, local_path))
    root_remote_dir = parts.path[1:]

    try:
        os.makedirs(local_path)
    except IOError:
        pass

    for f in bucket.objects.filter(Prefix=root_remote_dir):

        if f.key[-1] == "/":  # skip directories
            continue

        # Get the relative name of the object
        rel_path = posixpath.relpath(f.key, root_remote_dir)

        local_file = os.path.join(local_path, rel_path)
        try:
            os.makedirs(os.path.dirname(local_file))
        except IOError:
            pass
        print_status("Downloading file %s" % f.key)
        bucket.download_file(f.key, local_file)
