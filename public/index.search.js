var relearn_search_index = [
  {
    "breadcrumb": "Cloudifyi Cloud and DevOps Documentation",
    "content": "Index Azure DevOps Terraform Templates ",
    "description": "",
    "tags": null,
    "title": "Terraform Templates",
    "uri": "/terraform-templates.html"
  },
  {
    "breadcrumb": "Cloudifyi Cloud and DevOps Documentation \u003e Terraform Templates",
    "content": "How to call the terraform cloud as a backend template trigger: branches: include: - main pool: name: {your agent pool name} resources: repositories: - repository: template type: git name: {project/reponame} stages: - template: terraform-cloud-pipeline-template/plan.yaml@template parameters: workingdir: $(build.sourcesdirectory) environments: # the environment must exist in azure devops - environmentName: 'tfe-mgmt' # pointer to your backend file, if you have multi environment use the below folder structure backendfilelocation: '.\\environments\\prod\\backend.tf' terraformVersion: 'latest' condition: \"contains(variables['build.sourceBranch'], 'refs/heads/main')\" # variable group name kvvargroupname: \"sbs-tfc\" - template: terraform-cloud-pipeline-template/apply.yaml@template parameters: workingdir: $(build.sourcesdirectory) environments: # the environment must exist in azure devops - environmentName: 'tfe-mgmt' # pointer to your backend file, if you have multi environment use the below folder structure backendfilelocation: '.\\environments\\prod\\backend.tf' dependsOnStage: 'tfe_mgmt_plan' terraformVersion: 'latest' condition: \"contains(variables['build.sourceBranch'], 'refs/heads/main')\" kvvargroupname: \"sbs-tfc\"How to call the azurerm as a backend template trigger: batch: true branches: include: - main pool: name: {your agent pool name} resources: repositories: - repository: template type: git name: {project/reponame} stages: - template: terraform-azurerm-pipeline-template/plan.yaml@template parameters: workingdir: $(build.sourcesdirectory) environments: # the environment must exist in azure devops - environmentName: 'dnainfrastructure-az-main' backendfilelocation: '.\\environments\\main\\backend.tf' terraformVersion: 'latest' condition: \"or(contains(variables['build.sourceBranch'], 'refs/heads/main'), contains(variables['build.sourceBranch'], 'refs/pull/'))\" # service connection must exist in ADO backendservicearm: \"\" # configuration of the backend resourcegroupname: \"\" storageaccountname: \"\" containername: \"\" statefilename: \"\" tfvarspath: \"\" # name of the azure devops variable group kvvargroupname: \"\" - template: terraform-azurerm-pipeline-template/apply.yaml@template parameters: workingdir: $(build.sourcesdirectory) environments: # the environment must exist in azure devops - environmentName: 'dnainfrastructure-az-main' backendfilelocation: '.\\environments\\main\\backend.tf' terraformVersion: 'latest' condition: \"or(contains(variables['build.sourceBranch'], 'refs/heads/main'), contains(variables['build.sourceBranch'], 'refs/pull/'))\" # service connection must exist in ADO backendservicearm: \"\" # configuration of the backend resourcegroupname: \"\" storageaccountname: \"\" containername: \"\" statefilename: \"\" tfvarspath: \"\" # name of the azure devops variable group kvvargroupname: \"\"",
    "description": "",
    "tags": null,
    "title": "Azure DevOps Terraform Templates",
    "uri": "/terraform-templates/azure-devops/terraform-templates.html"
  },
  {
    "breadcrumb": "Cloudifyi Cloud and DevOps Documentation",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories.html"
  },
  {
    "breadcrumb": "",
    "content": "This site serves as a KB for all Platform and provisioning related topics.\n",
    "description": "",
    "tags": null,
    "title": "Cloudifyi Cloud and DevOps Documentation",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Cloudifyi Cloud and DevOps Documentation",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags.html"
  }
]
