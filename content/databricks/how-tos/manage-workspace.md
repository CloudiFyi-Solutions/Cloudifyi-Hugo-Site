+++
title = "Manage Your Workspace"
+++


- [Databricks Resource Management - Application teams/DPE Team](#databricks-resource-management---application-teamsdpe-team)
  - [Pre-requisites](#pre-requisites)
  - [Adding a new nodepool](#adding-a-new-nodepool)
  - [Adding cluster policy](#adding-cluster-policy)
  - [Adding a new cluster](#adding-a-new-cluster)
  - [Adding github repos](#adding-github-repos)
  - [Adding a new private endpoint](#adding-a-new-private-endpoint)
  - [Creating a PR](#creating-a-pr)


# Databricks Resource Management - Application teams/DPE Team

Databricks workspace management is a collaborative effort. We encourage application team members to manage their own application clusters and resources. This eliminates the overhead of platform teams and allows the app team to manage their own resources, while still maintaining the security and compliance of the platform.

## Pre-requisites
   1. Know your workspace - Databricks workspaces are deployed in a dedicated tenant and are not part of the application tenant. Each LOB has a shared databricks workspace and may contain dedicated workspaces for specific applications. The directory name will match this syntax for a shared workspace `AZ_Cld3_LOB_<LOB Name>_dbk_NPE`. For this how-to, we will use the shared workspace for CFES LOB as an example. The directory name is `AZ_Cld3_LOB_CFES_dbk_NPE`.

   2. Know your application terraform file - Each application has a terraform file named `databricks-app-<app-name>.tf` in the workspace directory. This file contains the application specific variables and resources. Newer versions have a single `locals-apps.tf` file that contains all the variables.

   3. Use VS Code, JetBrains or any other IDE to edit the terraform files. DO NOT USE NOTEPAD OR ANY OTHER TEXT EDITORS.

   4. Clone the repo to your local machine and switch to the branch named "npe".
      ```bash
         git clone https://github.com/Cloud-3-0-EMU/AZ_Cld3_LOB_CFES_dbk_NPE
         git checkout npe
      ```
   5. Create a new branch named `feature\app-name` from `npe`.
      ``` 
      git checkout -b feature\app-name
      ```

## Adding a new nodepool

The local variable `locals.<env>.cluster-node-pools[]` holds the cluster information. One or more clusters can be defined in the list, The following is an example of a cluster node pool definition:

```hcl
cluster-node-pools = [
   {
    node-pool-name = "etl-node-pool"
    #Refer to the following link to get the list of available node types: https://azure.microsoft.com/en-us/pricing/details/databricks/ if set to null, smallest LTS node type will be used.
    driver-node-type                      = null
    enable-elastic-disk                   = false
    idle-instance-autotermination-minutes = 20
    max-capacity                          = 2
    min-idle-instances                    = 1
    #Refer to the spark version release here: https://learn.microsoft.com/en-us/azure/databricks/release-notes/runtime/releases , if set to null, it will use the default LTS spark version.
    spark-version                         = null
    worker-node-type                      = null
    #All mandator tags are set up automatically. If you want to add additional tags, add them here.
    custom-tags    = {}
  }

]
      
```
## Adding cluster policy

Cluster policies are meant to govern your clusters. Policies can be set on the `local.app-name.cluster-policies` object. Here is a sample cluster policy

```
{
  "spark_conf.spark.databricks.cluster.profile": {
    "hidden": true,
    "type": "forbidden"
  },
  "spark_version": {
    "type": "unlimited",
    "defaultValue": "auto:latest-lts"
  },
  "node_type_id": {
    "type": "allowlist",
    "values": [
      "Standard_F4s",
      "Standard_DS3_v2"
    ],
    "defaultValue": "Standard_F4s",
    "isOptional": true
  },
  "driver_node_type_id": {
    "type": "fixed",
    "value": "Standard_DS3_v2",
    "hidden": true
  },
  "autoscale.min_workers": {
    "type": "fixed",
    "value": 1,
    "hidden": true
  },
  "autoscale.max_workers": {
    "type": "range",
    "maxValue": 25,
    "defaultValue": 5
  },
  "cluster_type": {
    "type": "fixed",
    "value": "job"
  }
} 

```

## Adding a new cluster

{{% notice style="warning" %}}
Shared clusters have limitations working with Unity Catalog, especially when access ADLS endpoints or installing python libraries. We do not support troubleshooting shared clusters at this time.

Use `Personal Clusters` for development `Job Clusters` for other workloads.

{{% /notice %}}

The local variable `locals.<env>.clusters[]` holds the cluster information. One or more clusters can be defined in the list. The following is an example of a cluster definition:

```hcl
  clusters = [
    {
      cluster-name            = <clustername>
      policy-id               = null
      #Refer to the spark version release here: https://learn.microsoft.com/en-us/azure/databricks/release-notes/runtime/releases , if set to null, it will use the default LTS spark version.
      spark-version           = <spark-version>
      #Refer to the following link to get the list of available node types: https://azure.microsoft.com/en-us/pricing/details/databricks/ if set to null, smallest LTS node type will be used.
      node-type-id            = "Standard_DS3_v2"
      driver-node-type-id     = "Standard_DS3_v2"
      #Auto scaling will be disabled if the number of workers is set.
      num-workers             = null #4
      #enable auto scalling and set the min and max number of workers.
      auto-scaling            = [1, 2]
      #If set to true, the cluster will be terminated after 20 minutes of inactivity.
      autotermination-minutes = 20
      #All mandator tags are set up automatically. If you want to add additional tags, add them here.
      custom-tags             = {}
      #set spark environment variables here. DO NOT USE CREDENTIALS HERE. Credentials need to be set up in Databricks Secret scope and referenced as variables.
      spark-env-vars          = ""
      #You can set up libraries here, however it is recommended to use notebooks for library management. We do not have JFROG set up yet.
      libraries               = [
        {
            pypi = {
                package = "azureml-sdk"
            }
        }
      ]
    #You can set up init scripts here.
      init-scripts            = [
        "hello-world.sh"
      ]
    }

  ]
      
```

## Adding github repos

{{% notice style="warning" %}}
We no longer support adding repos via Terraform. Please refer to [Databricks Deployments](/databricks/explaination/deployment.html)
{{% /notice %}}


To add a github repo, add the repo information to the local variable `locals.<env>.repos` in the `databricks-app-<app-name>.tf` file. The following is an example of a repo definition:

> Please add srjadadurai_humana and kbatchu_humana as collaborators to the repo. this is a temporarily solution till we have a service principal to manage the repos.

```hcl
repos = {
  "databricks-repos-poc-npe" = {
    url    = "https://github.com/Cloud-3-0-EMU/databricks-etl-demo-app"
    branch = "npe"
    path   = "databricks-etl-demo-app-npe"
  }
```


## Adding a new private endpoint 

{{% notice style="notice" %}}
We strongly recommend you to create private endpoints in application specific landing zone repos and subnets. Creating a private endpoint in databricks will limit the access to the resource to only this Databricks across 3.0.  
{{% /notice %}}


1. Edit the "private-endpoint.tf" and add the private endpoint definition to the list local.private-endpoints. The following is an example of a private endpoint definition:

```hcl
private-endpoints = [
  {
      tags                           = {}
      private-connection-resource-id = "/subscriptions/3a3df102-1a62-48b8-8d76-21cfdaa20864/resourceGroups/az3-unitycatalog-eastus2-prd-rg/providers/Microsoft.Storage/storageAccounts/humazuceastus2prdms"
      #syntax: az3-<lob>-<env>-<resource-identifier>-<sub-resource-identify>-pe
      private-endpoint-name          = "az3-cfes-dbk-npe-humazuceastus2prdms-blob-pe"
      #true for most resources, 
      is-manual-connection           = true
      #check-out the document for sub resource: https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview
      subresource-names              = ["blob"]
      request-message                = "Please approve"
  }
]

```
1. Review the existing PEs to makes sure you are not duplicating the resource.
2. Some resources may need more than one subresource. For example, the storage account may need blob, file and queue subresources. In this case, you will need to add additional endpoints to the list. Do not add them to the same endpoint definition.

## Creating a PR

   1. Commit and push the changes to your landing zone repository under a new branch named `feature\app-name`. 
      ```bash 
      git add .
      git commit -m "your commit message"
      git push origin feature/your-branch-name
      ```

   2. Applicaion teams may not have access to the databricks landing zone terraform workspaces. However all the TFE logs are available in Github actions. You can review the logs to make sure the terraform plan and apply are successful.

   2. PR should have a title & description of the changes and the reason for the changes. The PR should be reviewed by atleast one other application team member other than the author.
      
   3. If you manage or own multiple applications, create a PR for each application separately.
      
   4. Allow atleast 4 - 8 hrs time for the PR to be reviewed and approved, before contacting the Data Platform Engineering Team.
