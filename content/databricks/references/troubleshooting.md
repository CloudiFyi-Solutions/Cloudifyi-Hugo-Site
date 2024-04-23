+++
title = "Troubleshooting"
+++

## Databricks Troubleshooting 

Databricks Workspace in cloud 3.0 reside on a dedicated landing zone and its own dedicated VNET. This is to ensure that the workspace is isolated from the rest of the application data and gives ablility to share the workspace with multiple applications.

This also means that the workspace requires Private Endpoints, VNET Peerings and firewall rules to be configured to allow access to the workspace.

This article will guide you through the steps to troubleshoot the workspace connectivity issues. In simple terms, the connectivity issues can be caused due to few main reasons:

1. Databricks VNET is not set up in Alkira or the Alkira connector is not approved. 
2. Databricks does not have a Private Endpoint configured to your resource or the Private Endpoint is not approved.
3. Firewall rules are not configured to allow access to the workspace.
4. Databricks VNET is not peered with common services / shared service VNET.


Please follow the steps below to troubleshoot the connectivity issues.

### Troubleshooting 

Follow the instructions in the notebook will help you troubleshoot the connectivity issues.

Clone the  [Databricks-Utility](https://github.com/Cloud-3-0-EMU/dbk-utils) repo to your workspace repo.

Follow the steps in the notebook `dbk-utils/troubleshooting/connectivity` 

## Checklist before contacting support

  - [ ] Databricks has a Private Endpoint configured to your resource and the Private Endpoint is approved.
  - [ ] Firewall rules are configured to allow access to the workspace.
  - [ ] Validate if the pre-requisites for each integration is complete. Refer to Integration section in this wiki.
  

## References

**Alkira** - Alkira is our networking virtual hub that provides connectivity between cloud 3.0 and cloud 1.0/2.0. It also provides connectivity to on-premises datacenters.

## Private Endpoints

Two things to note:

1. Create a Private endpoint from your databricks workspace to the resource that needs to access to. If you are using a shared workspace, refer to the link [ to create a Private Endpoint](https://github.com/Cloud-3-0-EMU/Azure-Cld3-Dbk-Ws-Mgmt/#adding-a-new-private-endpoint). If you are using a dedicated workspace, refer to the workspace repo for instructions on how to create a private endpoint.

2. Once  a Private Endpoint is created, its need to be approved. The owner of the resource should approve the private endpoint. In order to approve private endpoints, you should be a part of the "humana private endpoint approvers" RBAC.

> If you are a resource owner, request for “Humana Private Endpoint Approver” role on their resource group by using go/rfa. Alternatively you can reach out to cloud operations team to get the PE approved. Refer to [ Engagements ](/content/databricks/references/engagement.md)