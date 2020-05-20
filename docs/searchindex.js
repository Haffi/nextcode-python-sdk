Search.setIndex({docnames:["api","api_basic","api_exceptions","api_phenotype","api_pipelines","api_query","api_workflow","apidoc","development","index","jupyter","local_workflows","notebook","quickstart"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["api.rst","api_basic.rst","api_exceptions.rst","api_phenotype.rst","api_pipelines.rst","api_query.rst","api_workflow.rst","apidoc.rst","development.rst","index.rst","jupyter.rst","local_workflows.rst","notebook.ipynb","quickstart.rst"],objects:{"nextcode.client":{Client:[1,1,1,""],get_api_key:[1,3,1,""],get_service:[1,3,1,""]},"nextcode.client.Client":{available_profiles:[1,2,1,""],available_services:[1,2,1,""],get_access_token:[1,2,1,""],service:[1,2,1,""]},"nextcode.config":{Config:[1,1,1,""],create_profile:[1,3,1,""],load_cache:[1,3,1,""],set_default_profile:[1,3,1,""]},"nextcode.exceptions":{InvalidProfile:[2,4,1,""],InvalidToken:[2,4,1,""],ServerError:[2,4,1,""],ServiceNotFound:[2,4,1,""]},"nextcode.keycloak":{KeycloakSession:[1,1,1,""],auth_popup:[1,3,1,""],login_keycloak_user:[1,3,1,""]},"nextcode.keycloak.KeycloakSession":{get_user_roles:[1,2,1,""]},"nextcode.services":{pipelines:[4,0,0,"-"]},"nextcode.services.phenotype":{exceptions:[3,0,0,"-"],phenotype:[3,0,0,"-"],phenotype_matrix:[3,0,0,"-"],service:[3,0,0,"-"]},"nextcode.services.phenotype.exceptions":{PhenotypeError:[3,4,1,""]},"nextcode.services.phenotype.exceptions.PhenotypeError":{with_traceback:[3,2,1,""]},"nextcode.services.phenotype.phenotype":{Phenotype:[3,1,1,""]},"nextcode.services.phenotype.phenotype.Phenotype":{"delete":[3,2,1,""],add_tag:[3,2,1,""],delete_tag:[3,2,1,""],get_tags:[3,2,1,""],refresh:[3,2,1,""],set_tags:[3,2,1,""],update_description:[3,2,1,""],upload:[3,2,1,""]},"nextcode.services.phenotype.phenotype_matrix":{PhenotypeMatrix:[3,1,1,""]},"nextcode.services.phenotype.phenotype_matrix.PhenotypeMatrix":{add_phenotype:[3,2,1,""],add_phenotypes:[3,2,1,""],get_data:[3,2,1,""],remove_phenotype:[3,2,1,""]},"nextcode.services.phenotype.service":{Service:[3,1,1,""]},"nextcode.services.phenotype.service.Service":{create_phenotype:[3,2,1,""],current_user:[3,2,1,""],endpoints:[3,2,1,""],get_phenotype:[3,2,1,""],get_phenotype_matrix:[3,2,1,""],get_phenotypes:[3,2,1,""],get_tags:[3,2,1,""],healthy:[3,2,1,""],openapi_spec:[3,2,1,""],status:[3,2,1,""]},"nextcode.services.pipelines":{Service:[4,1,1,""]},"nextcode.services.pipelines.Service":{current_user:[4,2,1,""],endpoints:[4,2,1,""],healthy:[4,2,1,""],openapi_spec:[4,2,1,""],status:[4,2,1,""]},"nextcode.services.query":{exceptions:[5,0,0,"-"],jupyter:[5,0,0,"-"],query:[5,0,0,"-"],service:[5,0,0,"-"],utils:[5,0,0,"-"]},"nextcode.services.query.exceptions":{MissingRelations:[5,4,1,""],QueryError:[5,4,1,""],TemplateError:[5,4,1,""]},"nextcode.services.query.exceptions.MissingRelations":{with_traceback:[5,2,1,""]},"nextcode.services.query.exceptions.QueryError":{with_traceback:[5,2,1,""]},"nextcode.services.query.exceptions.TemplateError":{with_traceback:[5,2,1,""]},"nextcode.services.query.jupyter":{GorMagics:[5,1,1,""],get_service:[5,3,1,""],load_ipython_extension:[5,3,1,""],print_details:[5,3,1,""],print_error:[5,3,1,""],sizeof_fmt:[5,3,1,""]},"nextcode.services.query.jupyter.GorMagics":{gor:[5,2,1,""],gorfind:[5,2,1,""],gorls:[5,2,1,""],handle_exception:[5,2,1,""],load_relations:[5,2,1,""],replace_vars:[5,2,1,""]},"nextcode.services.query.query":{Query:[5,1,1,""]},"nextcode.services.query.query.Query":{cancel:[5,2,1,""],dataframe:[5,2,1,""],done:[5,2,1,""],download_results:[5,2,1,""],failed:[5,2,1,""],get_results:[5,2,1,""],init_from_resp:[5,2,1,""],perspectives:[5,2,1,""],refresh:[5,2,1,""],running:[5,2,1,""],wait:[5,2,1,""]},"nextcode.services.query.service":{Service:[5,1,1,""]},"nextcode.services.query.service.Service":{add_template_from_file:[5,2,1,""],current_user:[5,2,1,""],delete_template:[5,2,1,""],endpoints:[5,2,1,""],execute:[5,2,1,""],execute_template:[5,2,1,""],get_queries:[5,2,1,""],get_query:[5,2,1,""],get_template:[5,2,1,""],get_templates:[5,2,1,""],healthy:[5,2,1,""],openapi_spec:[5,2,1,""],render_template:[5,2,1,""],set_project:[5,2,1,""],status:[5,2,1,""]},"nextcode.services.query.utils":{get_fingerprint:[5,3,1,""]},"nextcode.services.workflow":{exceptions:[6,0,0,"-"],job:[6,0,0,"-"],pytest_plugin:[6,0,0,"-"],service:[6,0,0,"-"]},"nextcode.services.workflow.exceptions":{JobError:[6,4,1,""]},"nextcode.services.workflow.exceptions.JobError":{with_traceback:[6,2,1,""]},"nextcode.services.workflow.job":{WorkflowJob:[6,1,1,""]},"nextcode.services.workflow.job.WorkflowJob":{cancel:[6,2,1,""],done:[6,2,1,""],duration:[6,2,1,""],events:[6,2,1,""],failed:[6,2,1,""],finished:[6,2,1,""],inspect:[6,2,1,""],log_groups:[6,2,1,""],logs:[6,2,1,""],processes:[6,2,1,""],refresh:[6,2,1,""],resume:[6,2,1,""],running:[6,2,1,""],wait:[6,2,1,""]},"nextcode.services.workflow.service":{Service:[6,1,1,""]},"nextcode.services.workflow.service.Service":{current_user:[6,2,1,""],endpoints:[6,2,1,""],find_job:[6,2,1,""],get_jobs:[6,2,1,""],get_pipelines:[6,2,1,""],get_projects:[6,2,1,""],healthy:[6,2,1,""],openapi_spec:[6,2,1,""],post_job:[6,2,1,""],run_local:[6,2,1,""],status:[6,2,1,""]},"nextcode.session":{ServiceSession:[1,1,1,""]},"nextcode.session.ServiceSession":{"delete":[1,2,1,""],get:[1,2,1,""],post:[1,2,1,""],put:[1,2,1,""],request:[1,2,1,""]},"nextcode.utils":{get_access_token:[1,3,1,""],host_from_url:[1,3,1,""],jupyter_available:[1,3,1,""]},nextcode:{client:[1,0,0,"-"],config:[1,0,0,"-"],csa:[1,0,0,"-"],keycloak:[1,0,0,"-"],session:[1,0,0,"-"],utils:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"02d":[],"1kib":[],"2019_0325":12,"2kib":12,"622555a":12,"8fc327bb08282d02f9e987e11c4073e64ec77677":10,"boolean":1,"byte":1,"case":[1,13],"class":[0,1],"default":[1,3,5,6,10],"export":[1,6,11],"float":[1,5,6],"function":[0,1,5],"import":[0,1,11,12,13],"int":[3,5,6],"long":[1,12],"new":[1,3,5,6,8,13],"null":12,"return":[1,3,4,5,6,10],"short":[],"true":[1,3,5,11],"try":[10,11,12],"var":[10,12],AWS:[6,11],For:[1,7,11],Has:6,NFS:12,One:3,TLS:1,The:[1,2,3,5,6,8,10,11,12,13],Then:[8,10],There:[0,5],These:[0,9,13],Use:5,Using:9,With:0,__doc__:11,__traceback__:[3,5,6],abl:[9,12,13],about:9,abov:[],absolut:6,access:[1,2,6,7,9,10,11],account:[10,13],achiev:11,acquir:11,action:13,activest:1,actual:13,add:[3,5,8,11],add_phenotyp:3,add_tag:3,add_template_from_fil:5,added:[3,5,8,13],addit:[3,9,11,12],admin:[1,5],administr:13,after:[3,10,13],against:[1,6,11],all:[3,5,6,7,8,11,13],all_project:3,allcount:12,allel:[10,12],allow:[3,6,8,11,12,13],allow_redirect:1,allpn:12,along:8,alreadi:[0,3,5,12],also:[0,10,11,12,13],altern:13,alwai:[0,12],analys:9,analysi:12,ani:[5,12],anoth:5,anyth:11,api:[1,2,3,4,5,6,9,10,12],api_kei:[0,1,13],append:[],appli:[3,5,6,11],aquir:1,archiv:[3,9],arg:[1,3,4,5,6],argument:[1,5],asc:5,assign:10,assum:[0,1,11,12],attribut:[3,5],auth:1,auth_popup:[1,13],authent:[1,9],author:7,authservererror:1,autoload:5,automat:[1,6,8],avail:[1,2,3,5,6,8,9,10,12],available_profil:1,available_servic:1,aws:[6,11],aws_access_key_id:11,aws_profil:11,aws_secret_access_kei:11,bar:[],base:[1,3,5,11],base_url:1,bash:11,basic:[0,5,9,11],bearer:7,becaus:5,been:[0,3,5,6,10,12,13],befor:[1,11],below:13,benefici:11,between:[5,6,13],bla:12,bld:[],bleed:8,bodi:1,bool:[1,3,4,5,6],bootstrap:5,borg:1,both:11,boto:6,bpstart:12,bpstop:12,branch:8,brief:[],bring:12,brower:13,browser:1,bucket:[6,11],build:[6,9,11],build_context:6,build_sourc:6,builder:3,built:8,builtin:6,bump:8,bundl:1,button:12,c4ca0fce323ab019ee24e5bee58ed3ccec8d4c2a:[],cach:[1,3,5,6,13],call:[1,3,5,7,11],callabl:1,callback:5,caller:5,can:[0,1,3,5,6,7,8,9,10,11,12,13],cancel:[5,6,9],cannot:[3,5],capabl:6,cast:3,cat:5,catalog:3,categori:[3,5],cell:5,cert:1,certif:1,chang:[3,8],charact:12,chart:[],check:[1,8],chr01:[],chr10:[],chr1:[10,12],chr7:12,chr:[],chrom:[10,12],chromosom:[],chronolog:5,cla:5,classmethod:1,cli:[11,13],click:12,client:[0,3,4,5,6,7,9,13],client_id:1,clone:8,cluster:6,code:[1,8,9,11,13],coffe:[],column:[5,12],com:[1,8,10,12,13],come:3,command:[8,10,12],commandindex:[],commandlin:8,commandnam:[],commandsourc:[],commit:8,commun:[1,5,6],complet:[5,6,11,13],complex:12,complic:11,compound:9,compount:12,config:[0,3,11,13],configur:[1,5,6,11],connect:[0,1,3,5,6,12,13],consol:10,construct:[1,12],constructor:1,consumpt:6,contact:9,contain:[3,5,6,11],content:[1,5],context:6,continu:11,control:1,conveni:11,convert:5,cooki:1,cookiejar:1,correct:13,correctli:6,could:3,count:12,covert:[],creat:[1,3,6,9,11,13],create_phenotyp:3,create_profil:[1,13],created_at:3,created_bi:3,credenti:[6,11],criteria:6,csa:0,cup:[],current:[1,3,5,6,10,12],current_us:[3,4,5,6],custom:[1,3,5,6],data:[1,3,5,6,12],datafram:[3,5,10,12],date:[5,9],dbnsp:[],dbsnp:[10,12],dbsnp_2m:12,debug:6,decod:[1,3,4,5,6],def:9,defin:5,delet:[1,3,5],delete_tag:3,delete_templ:5,delimit:12,depend:[1,6,9],deploi:8,desc:5,descript:[3,6],detail:[5,6,13],dev:12,develop:[1,6,9,11],dict:[1,3,4,5,6],dictat:3,dictionari:[1,3,4,5,6],dictonari:5,digest:1,direct:11,directi:13,directli:[0,3,10,12],disk:1,displai:[],docker:11,docstr:11,document:[0,3,5,6,8,9,11,13],doe:[1,3,5],doing:11,done:[5,6,8,12],dont:1,download:[1,5,9],download_result:5,durat:[6,12],dynam:5,each:[3,6,7,12,13],easi:8,echo:11,edg:8,edit:8,either:[1,9],els:[],emit:11,empti:5,enabl:1,encapsul:6,encod:1,end:12,endpoint:[1,3,4,5,6,10,12],entir:5,entrypoint:1,env:[5,10,11,12],environ:[1,3,6],equal:[],error:[2,5,11,12],errortyp:[],etc:10,event:6,everi:8,exampl:[0,1,5,10,11,13],except:[0,9],execut:[5,11,12],execute_templ:5,exist:[3,5],expand:12,expect:3,explicitli:5,expos:[3,4,5,6,7],express:9,extens:[0,10,12],facil:[0,9],fail:[3,5,6,9],fals:[1,3,4,5,6],familiar:12,featur:[0,1],fetch:[5,12],few:8,field:5,figsiz:[],figur:[],file:[1,5,9,11],filenam:[1,5,12],filt:5,filter:[3,5,6],find:5,find_job:6,fingerprint:5,finish:[5,6],first:[0,3,5,8,12,13],flag:6,flow:1,folder:[5,6,9,11],follow:[8,11,12,13],forc:[3,4,5,6],fork:8,form:5,format:[1,5,6],forward:6,found:[1,3,5],freez:12,from:[1,3,4,5,6,7,8,11,12,13],full:5,fulli:[5,6,11],gener:[1,5,12],get:[0,1,3,5,6,9,11,12,13],get_access_token:1,get_api_kei:[1,13],get_data:3,get_fingerprint:5,get_job:6,get_phenotyp:3,get_phenotype_matrix:3,get_pipelin:6,get_project:6,get_queri:5,get_result:5,get_servic:[0,1,3,5,11,12,13],get_tag:3,get_templ:5,get_user_rol:1,git:[6,8,10,12],github:[7,8,9],give:1,gor:[5,9,10],gor_api_kei:[1,10,12],gor_api_project:[3,6,10,12],gorfind:5,gorl:[5,12],gormag:5,gormessag:[],gorz:12,grab:[],graph:[],group:[6,12],handl:[1,5,12],handle_except:5,has:[0,3,5,6,10,12,13],have:[3,5,6,10,11,12,13],head:8,header:[1,5,7],healthi:[3,4,5,6],heavi:1,hello:[11,12],helper:[0,1,5,13],here:[3,5,7,8,11],high:1,higher:9,hoc:5,host:1,host_from_url:1,hostnam:1,how:[1,11,12],howev:[10,11,12],html:8,http:[1,7,8,10,12,13],human:6,ignor:1,iii:1,imag:11,immedi:1,implement:6,implicitli:3,includ:[3,5,9,10,11,13],includeconfig:11,inclus:5,indefinit:6,index:[9,12],individu:11,inform:[3,4,5,6,9,12],init_from_resp:5,initi:[5,6,9,13],inlin:12,inplac:[],insid:11,inspect:6,instal:[1,3,5,8,11,12,13],instanc:[0,1,5,6,12],instanti:3,instead:[1,5,11,12],instruct:6,intanti:1,integr:[6,9],intellig:3,intend:[1,9],interact:[1,5],interfac:[1,3,4,5,6,9,11],intial:10,intraspect:3,introduc:10,invalid:[2,5],invalidprofil:[1,2],invalidtoken:[1,2],invok:0,ipython:[5,9],is_al:6,is_json:5,isdigit:[],item:3,iter:[],jjj:1,job:[0,5,8,11],job_id:[6,11],job_typ:5,joberror:6,jonb:12,json:[1,5,7],jti:1,jupyt:[0,1,9,11,12],jupyter_avail:1,just:11,jwt:[1,2,3,4,5,6,7,12,13],keep:9,kei:[0,1,2,3,6,7,9,10,11,12],keycloak:[0,7,13],keycloaksess:1,keyword:5,kind:[],kkk:1,knowledg:11,kubernet:6,kwarg:[1,3,4,5,6],label:3,larg:12,last:[3,7],later:1,latest:[5,8],lead:[],learn:9,least:3,let:[],level:[0,1,6],lexic:[],librari:[1,5],lifetim:13,like:[1,11],limit:[3,5,6],line:[5,9],line_count:12,lint:8,linux:11,list:[1,3,5,6,12],live:6,load:[1,5,10,12],load_cach:1,load_ext:[5,10],load_ipython_extens:5,load_rel:5,local:[1,3,5,6,7,9,13],localhost:1,log:[1,6,11,13],log_filt:6,log_group:6,log_queri:[5,12],login:1,login_keycloak_us:1,longer:[5,6],look:11,low:[0,1,6],lowercas:3,made:8,magic:[5,9,10],main:11,major:8,make:8,manag:[1,6],map:1,master:8,materi:[],matplotlib:[],matrix:0,matter:1,max:[5,6],max_second:[5,6],maximum:[3,5,6],md5:5,mean:5,meant:12,member:5,merg:8,messag:[2,5,6,11,12],method:[0,1,3,6,11,12,13],might:[5,6,8,11],minor:8,minut:[7,8],miss:[3,5],missing_valu:3,missingrel:[2,5],mode:[6,8],model:[5,6],modul:[5,9],month:13,more:[9,10],most:[3,5,11],multi:9,multipart:1,must:[1,3,5,6,11,13],mydbsnp:12,myfavouritefood:12,myfirstdef:12,myhost:1,myprofil:13,myproject:[3,5],myseconddef:12,myserv:13,name:[1,3,4,5,6,10,11,12],navig:13,need:[1,8,10,11,12,13],new_result:12,next:10,nextcod:[0,1,2,3,4,5,6,7,8,10,11,12,13],nextcode_disable_cach:1,nextcode_profil:1,nextflow:[6,11],node:6,non:[1,13],none:[1,2,3,5,6],nor:12,normal:11,note:[3,5,6,9,13],notebook:[5,9,11,12],noth:1,now:[8,10,11,12,13],nowait:5,num:[5,12],number:[3,5,6,12],oaram:6,oauth2:1,oauth:13,object:[0,1,3,4,6,10],occas:11,off:11,offset:5,omit:11,onc:[7,13],one:[1,3,8,10],ones:3,onli:[3,5,6,9],open:1,openapi:[3,4,5,6,7],openapi_spec:[3,4,5,6],oper:12,option:[1,3,5,6,11],order:[1,5,11,13],org:[5,8],organ:5,other:11,otherwis:6,our:12,out:[5,10,11],outfil:12,output:12,over:8,overli:11,overrid:[1,3],overview:11,own:[10,13],packag:[5,6,8,9],package_vers:5,page:[0,1,8,9,10],pair:1,panda:[3,5,10,12],param:[1,5,6],paramet:[1,3,5,6],partial:[5,12],pass:[0,1,3,5,6],password:[1,7,13],passwrod:1,past:[5,6],patch:8,path:[1,5,6],pattern:1,pem:1,pend:5,per:3,perform:7,persist:[1,5],perspect:5,pgor:12,phenotyp:[0,9],phenotype_matrix:3,phenotypeerror:3,phenotypematrix:3,pip:[8,9,10,12],pipelin:[0,6,9],pipeline_nam:6,pizza:12,platform:12,pleas:[3,9,10,13],plenti:[],plink_w:12,plot:[],plt:[],plugin:[0,5],pnlist:12,pns:5,pod:6,poll:[5,6],poll_period:[5,6],pos:[10,12],post:[1,6],post_job:6,pprint:12,preced:1,prefer:12,prepar:1,present:3,pretti:5,previou:[3,13],previous:[5,6],primit:[],principl:11,print:[1,5,10,11,12],print_detail:5,print_error:5,privat:9,probabl:12,problem:3,process:[6,11,13],process_id:6,produc:12,profil:[1,2,3,5,6,11,13],profile_nam:5,progress:8,project:[3,5,6,8,10,12],project_nam:6,properti:[3,4,5,6],protocol:1,provid:1,proxi:[1,5,6,12],publicli:9,pull:8,purpos:5,push:8,put:1,pypi:8,pyplot:[],pytest:0,python:[7,8,10,11,13],qry:[12,13],queri:[0,1,2,6,9,10,13],query_id:[2,5,12],querybuild:[],queryerror:[2,5],quick:9,quit:6,rais:[1,2,3,5,6],rangeindex:12,raw:[1,3,4,5,6,9],rcparam:[],read:1,read_csv:12,readabl:6,readi:[3,8,13],realm:1,reason:11,receiv:10,recip:1,redoc:7,redocli:7,refer:[3,6,9,10,13],referenc:1,refresh:[3,5,6,7],regularli:6,rel:[6,8],relat:[2,5,9],relation_nam:5,releas:9,reload_ext:12,remot:[5,11],remov:3,remove_phenotyp:3,render:5,render_templ:5,replac:5,replace_var:5,report:6,repositori:[6,8],repres:[3,5,6],represent:3,request:[1,2,3,5,7,8],requestid:[],requir:[5,7,10],rerun:[6,12],reset:13,resourc:[],resp:5,respond:13,respons:[1,2,3,5],rest:[1,5,6,7,9],result:[3,5,9],result_typ:3,resum:6,retriev:[1,3,7,13],revers:5,revis:6,role:1,root:[1,3,4,5,6,10,12],root_url:1,rout:5,row:[5,12],rs1198102769:[],rs1246160656:[],rs1260343719:[],rs1314111151:[],rs1360507296:[],rs1365205342:[],rs1379296286:[],rs775809821:[10,12],rs778633020:[],rs978760828:[10,12],rsid:[10,12],run:[1,5,6,8,9,10],run_loc:[6,11],runtim:12,same:11,saml:13,satisfi:6,save:[1,5,13],scratch:[6,11],script:[6,11,12],sdk:[0,1,5,6,7,8,10,11,13],search:9,sec:12,second:[5,6],section:[10,13],see:[1,5,6,10,11,13],seen:8,select:[2,5],self:[3,5,6],send:1,sent:1,sequenc:5,seriou:12,server:[1,2,3,5,6,9,10,11,12,13],servererror:[2,3,5,6],serversid:[3,5,6,7],servic:[1,2,9,11,12,13],service_nam:1,servicenotfound:[1,2],servicesess:1,session:[0,3,6,10,13],set:[0,1,3,5,6,8,11],set_default_profil:[1,13],set_project:5,set_tag:3,sever:[5,6],sha:[10,12],share:7,should:[3,8,10,11,12,13],show:[5,6,11,12],silent:5,similar:6,simpl:[5,9,11],simpli:12,simplic:11,simplifi:13,sinc:[8,11],singl:[5,9],singleton:1,size:5,sizeof_fmt:5,skip:[5,10],skip_auth:1,slash:1,small:5,snapshot:10,snippet:11,some:[2,5,11],someth:[1,11],sort:[2,5],sort_col:[],sort_valu:[],sourc:[1,2,3,4,5,6,9],spec:[3,4,5,6,7],special:[11,12],specif:[1,3,5,6,7],specifi:[1,6,12],split:12,ssl:1,stack:5,stacktrac:[],start:[0,3,5,8,9,11,12],startup:5,state:[5,6],statement:[5,9],statu:[0,3,4,5,6,11,12,13],status:6,status_messag:6,stderr:[5,12],step:12,still:6,stinkin:1,stop:12,store:[7,9],str:[1,3,5,6],stream:[1,5,12],string:[1,3,5,8,12],stringifi:6,structur:11,sublist:3,subsequ:[1,5],substitut:[3,5],successfulli:6,suffix:5,sugar:12,sum:5,suppli:[5,6],support:[5,9],svc:[0,3,5,6,11,12,13],syntact:12,syntax:[5,9,10],sys:12,system:[1,3,5,6,8],tabl:[],tag:[3,6,8],take:[1,8],templat:5,template_nam:5,templateerror:5,temporari:7,test:[5,6,8,10,11,12],testus:10,text:[6,11],textual:3,than:[5,6,11],thei:5,them:12,therefor:[3,5,9,13],thi:[0,1,3,5,6,7,8,9,10,11,12,13],though:11,through:[7,8,9,10,11,12,13],time:[5,12,13],timeout:1,timestamp:3,token:[1,2,7,12,13],tool:11,top:[6,10,12],tox:8,trace:6,trail:1,transit:5,travi:8,tree:5,trigger:2,tsv:[5,12],tupl:1,tutori:11,two:[3,11],tworld:12,txt:5,type:[1,3,4,5,6],typic:[6,7,8,11,13],ukbb:12,ukbb_hg38:12,unfilt:6,union:[1,5],uniqu:[1,3,5],unknowndef:12,unless:9,until:6,updat:[3,6],update_descript:3,updated_at:3,upload:[1,3,6,11],uri:1,url:[1,2,3,4,5,6,7],url_bas:1,usag:[1,5,9],use:[1,3,5,6,7,8,9,10,11,12,13],used:[1,3,5,6,10,11,12,13],user:[1,3,4,5,6,10,11,12,13],user_data:[5,9],user_nam:[1,5,6],usernam:[1,3,7,13],uses:12,using:[0,1,3,5,6,11,12,13],usual:12,util:0,val:[],valu:[3,6],vari:13,variabl:[1,3,5,9,10],variou:[0,1],vep_singl:12,veri:[11,12],verifi:[1,8,12,13],version:[3,5,8,9,10,12],via:[1,5,7,13],view:[3,5,6,7,11],virtual:[5,9],wait:[1,5,6,11],want:12,web:1,webpag:13,websit:9,well:12,when:[0,2,3,6,8,11,12],where:1,whether:[1,5],which:[1,5,8,9,10,11],who:[3,6],with_traceback:[3,5,6],within:[5,9,11,12],without:[0,1,9],won:[],work:[3,9,11,13],workflow:[0,9],workflowjob:6,worklow:11,workspac:10,world:[11,12],would:[11,13],wrap:1,write:12,wuxi:[7,8,9,10,12,13],wuxinextcod:[1,10,12],wuxinextcodedev:12,www:[1,13],xxx:[0,1,12,13],yaml:5,you:[0,3,5,6,7,8,9,10,11,12,13],your:[8,10,11,12,13],yyi:1,zero:1,zzz:1},titles:["API Reference","Basic facilities","Exceptions","Phenotype Service","Pipelines Service","Query Service","Workflow Service","Server API Documention","Developer information","Nextcode Python SDK","Jupyter Notebooks Integration","Running a local workflow","Building queries with the Python SDK","Quick Start"],titleterms:{"class":[3,4,5,6],Using:12,analys:12,api:[0,7,13],archiv:7,authent:7,avail:0,basic:[1,12],build:[8,12],builder:[],cancel:12,client:1,compound:12,config:1,content:9,creat:12,csa:1,def:12,develop:8,document:7,download:12,exampl:[],except:[2,3,5,6],express:12,extens:5,facil:1,fail:12,file:12,folder:12,get:10,gor:[7,12],graph:[],indic:9,inform:8,initi:12,instal:[9,10],integr:10,job:6,jupyt:[5,10],kei:13,keycloak:1,line:12,local:[11,12],magic:12,matrix:3,method:5,multi:12,nextcod:9,notebook:10,object:5,phenotyp:[3,7],pipelin:[4,7],plugin:6,pytest:6,python:[9,12],queri:[5,7,12],quick:13,refer:[0,12],relat:12,releas:8,resourc:9,result:12,run:[11,12],sdk:[9,12],server:7,servic:[0,3,4,5,6,7],session:1,simpl:12,singl:12,start:[10,13],statement:12,store:12,syntax:12,tabl:9,usag:13,user_data:12,util:[1,5],variabl:12,virtual:12,what:9,which:12,without:12,workflow:[6,7,11]}})