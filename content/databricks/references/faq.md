+++
title="Frequently Asked Questions"
weight=1
+++


## General

<details>
  <summary style="font-size: 20px; font-weight: bold;">What is app onboarding wrt to Databricks?</summary>

When your application is onboarded, your team gets the following objects.

- An Azure Active Directory Group (AAD)
- Access to an Azure Databricks Workspace.
- Secrete Scope
- Personal Compute Cluster Policy
- Small & Medium Shared/Job Compute Cluster Policy
- Repo Directory 
- Workspace Directory

Once you are a part of that AAD, you will be able to leverage the workspace as you see fit. If you had provided an Azure Service Principle while onboarding, that will also be a part of the AAD.
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">How can I create a new cluster?</summary>
  
  It depends. Shared Clusters can be created via Terraform. More information can be found in [Manage Your Workspace](/content/databricks/how-tos/manage-workspace.md). But if you'd like to create a personal compute, you can do that manually via UI.

  Creating clusters are required only during your development phase. Your notebooks should be schedule to run on job clusters on all other environments.
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">Are there any predefined cluster policies?</summary>

  Yes, the databricks workspace comes with below policies and the defination of these policies are available [here](https://github.com/Cloud-3-0-EMU/dataplatform-databricks-onboarding/tree/npe/modules/cluster-policy-setup/cluster_policies).

  - humana_personal_compute
  - humana_small_data_eng
  - humana_medium_data_eng

  We recommend using the humana_personal_compute for creating a personal compute for the development work. The small and medium policies shoud be used for crating job clusters to schedule the jobs. If you need a bigger cluster then please reach out to us.
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">Can I have multiple environments such as dev/test/qa?</summary>

  Absolutely! We call them logical environments. Our infrastructure environment supports NPE and PROD. But within those environments, you could have multiple logical environments with isolated access controls using different AAD groups.out to us.
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">Is the secret scope Azure Key-Vault backed?</summary>

  No, the secret scope which is created during the application on-boarding is NOT Azure Key-Vault backed. Hashicorp vault is recommended in cloud 3.0. A secret scope is created during the onboarding and secrets can added to this scope as explained [here](/databricks/how-tos/secrets-management.md).
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">How to install a python package on the cluster?</summary>

  The python libraries must be installed from jfrog. By default the `pip` is configured to install libraries from the `pythonhosted-pypi-remote` artifact. If you want to use your own artifact to install a package then pass the appropriate values for the PACKAGE_NAME, JFROG_ARTIFACTORY_USER, JFROG_ARTIFACTORY_PASSWORD and ARTIFACT_NAME in the below command and run it in a notebook or through the init-script of the cluster.
  ```
  % pip install <PACKAGE_NAME> https://<JFROG_ARTIFACTORY_USER>:<JFROG_ARTIFACTORY_PASSWORD>@humana.jfrog.io/artifactory/api/pypi/<ARTIFACT_NAME>/simple
  ```
</details>

## Networking

<details>
  <summary style="font-size: 20px; font-weight: bold;">I am accessing resources within my subscription. Should I require any additional networking configurations?</summary>

In Cloud 3.0, NSGs are open and there are no firewall rules setup. As long as your cloud 3.0 resource has a private endpoint to your application subnet, you should be able to access your resources without any additional networking configurations.
</details>

<details>
  <summary style="font-size: 20px; font-weight: bold;">I am accessing a cloud 1.0/2.0 resource. Should I require any additional networking configurations?</summary>

Yes. Its a case by case basis. Most likely you will require a Private Endpoint from your cloud 1.0/2.0 resource to your application subnet. Please reach out to cloud operations team to get the PE approved. Refer to [ Engagements ](/databricks/references/engagement.html)
</details>
