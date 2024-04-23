+++
title ="Prefect Administration"
+++


## Overview

This section provides information on how to manage the Prefect platform and primarily intended for platform administrators.

## Access Controls

With Prefect, admins can onboard `users` and `service accounts`. Access control can be managed at various levels:

- `Organization` - Users and Service accounts should be first created in the organization as Members. 
- `Workspaces` - Users and Service accounts can be added to one or more workspaces. Only one of the following roles should be assigned.
  - `Viewer` - Built-in role. This role can view all artifacts, deployments, blocks variables and run flows. Primarily used for QA and other non-developer roles.
  - `humana-developer` - This role can view all artifacts, deployments, blocks variables and run flows and deployments. Most developers will be assigned this role.
  - `humana-maintainer` - This role can view all artifacts, deployments, blocks variables and run flows. In addition, this role can also create and modify artifacts, deployments, blocks variables, run flows and create ACLS.
- `Object ACLs` - Object ACLs can be used to provide granular access to individual objects. For example, you can provide access to a specific  deployment or credential block.

Refer to How to [Add Users and Service Accounts](/prefect/how-tos/adding-users-service-accts) for more information.

### User Management

Adding users is a 2 step process. First, you will need to add the user to the organization and then add the user to the workspaces.

When an user is invited to an organization, they will receive an email with a link to sign-in.  Only after the users accepts the invite, you will be able to add the user to the workspaces.

{{% notice style="note" %}} The experience has not been consistent with Enterprise Accounts. Some user don`t receive and invite, however, they will be able to access the organization.
{{% /notice %}}

### Service Accounts

Adding service accounts also happen at the organization level. You will need to create a service account in the organization and then add the service account to the workspaces.

## Workers

Workers are basically agents  that run within our Humana compute environment. They are responsible for executing the workflows. We have automation in place to allow application teams to create workers in their respective environments.

### Work Pools and Queues

Workpools and queues allow teams to handle their workflow execution requirements. For example, a team may have long running workflows that require a dedicated pool of workers. Another team may have short running workflows that can share a pool of workers.

### Base Container Image

Base container docker image is required to deploy the worker image and other dependencies. The base image is maintained by the platform team and is available in the `humana` docker registry.

Docker URL: https://humana.jfrog.io/artifactory/dppa-docker-virtual/
Image Name: prefect-agent

Refer to [dataplatform-prefect-agent-base-image](https://github.com/Corp-Func-and-Ent-Sys-EMU/dataplatform-prefect-agent-base-image) for more information.


## AKS Worker Configuration

Refer to the [Argo AKS Worker Configuration Template](https://github.com/Cloud-3-0-EMU/Cloud-3-0-Argo-Control/blob/main/dataplatform-prefect/prefect-agent/dba-prefect-agent/templates/deployment.yaml) 

