+++
title = "Onboard to Prefect"
+++

{{% notice style="info" %}}
Process has changed and is simplified. Please read the instructions carefully.
{{% /notice %}}

## Prerequisites

You should have the following access 
 - github cloud-3-0-emu organization (go/github).
 - Jfrog artifactory (go/artifactory)
 - Python 3.9 or above (go/software)


## Getting workspace access

### How to get workspace access?

- Request go/rfa access to `G_Azure_Prefect_Cloud_User`
- Create an intake request for our team go/gen and assign to `DB_Azure_Eng` with the following information:
  - Your Application Name,
  - Humana Application ID,
  - Prefect Workspace name (see below for details)
  - Role (see below for details)

Your team will be provide with an Azure AD group that will have access to the corresponding workspace and role.

### How to access the workspace?

- You will be notified once you are added to the Organization. You should be able to sign-in successfully at this point.
  - To sign-in, visit https://app.prefect.cloud, click `Sign in with SSO` 
  - Enter your Humana email address in the Email/handle and hit "Continue".


### Workspaces

Workspace Name |  Description
--- |  ---
[shared-npe](https://app.prefect.cloud/account/472020b0-b08c-4c67-96a2-5af54b28ccb7/workspace/2a21c6c1-23d4-47ad-9a1c-8322b4bd24ff/dashboard) | Humana shared workspace for non-production environments
[shared-prd](https://app.prefect.cloud/account/472020b0-b08c-4c67-96a2-5af54b28ccb7/workspace/b5f915d5-9960-4a27-bf34-bb06fa9eb122/dashboard) | Humana shared workspace for production environments
[training](https://app.prefect.cloud/account/472020b0-b08c-4c67-96a2-5af54b28ccb7/workspace/d96df83f-c493-44b8-81a6-08c3d23eafce/dashboard)| Humana training workspace


## Roles you can request
  
- `Viewer` - Built-in role. This role can view all artifacts, deployments, blocks variables and run flows. Primarily used for QA and other non-developer roles.

- `humana-developer` - This role can view all artifacts, deployments, blocks variables and run flows and deployments. Most developers will be assigned this role.

- `humana-maintainer` - This role can view all artifacts, deployments, blocks variables and run flows. In addition, this role can also create and modify artifacts, deployments, blocks variables, run flows and create ACLS.

{{% notice style="warning" %}}
`Humana Maintainer` is not meant for application/segment teams. Its meant for platform teams who are responsible for managing the platform.
{{% /notice %}}

## Prefect Application Onboarding

As a part of prefect onboarding, we have 2 steps:
- Repo Onboarding 
- AKS Worker Configuration

Our platform engineering team will help you with the onboarding process. Please submit a go/rfa to  `DB_Azure_Eng` for the intake and expect a meeting invite.



