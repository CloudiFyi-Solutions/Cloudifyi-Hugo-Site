+++
title = "Data Platform Engineering Assets"
+++

## Data Platform Assets

- [Data Platform Assets](#data-platform-assets)
  - [Github](#github)
    - [Repositories](#repositories)
      - [Teams/Access Controls (setup in-complete)](#teamsaccess-controls-setup-in-complete)
  - [Vault](#vault)
  - [General Purpose Vault](#general-purpose-vault)
    - [Access Controls](#access-controls)
  - [Azure AD](#azure-ad)
    - [Service Principals](#service-principals)
    - [Keyvault](#keyvault)
  - [Terraform Workspaces](#terraform-workspaces)
---
### Github

#### Repositories

- [Data Platform Engineering Docs](https://github.com/Cloud-3-0-EMU/Data-Platform-Engineering-Docs) : Wiki Site for our team
- [Python Tools for Data Platform Engineering](https://github.com/Corp-Func-and-Ent-Sys-EMU/dataplatform-management): Python tools for managing various aspects of the Data Platform
- [Git Repos & TFE/C Workspace Management Repo ](https://github.com/Corp-Func-and-Ent-Sys-EMU/dataplatform-git-management-tf/): Repo to manage Git Repos and TFE/C Workspaces

##### Teams/Access Controls (setup in-complete)

- `AZ_DPE_Admins`: Repo Admins and CODEOWNERS
- `AZ_DPE_Developers`: Repo Contributors

---
### Vault

### General Purpose Vault
- [clouddba.app0000903 QA ](https://qa-itvault.humana.com/ui/vault/secrets/secret/list/clouddba.app0000903/?namespace=nscfes)
- [clouddba.app0000903 PROD ](https://itvault.humana.com/ui/vault/secrets/secret/list/clouddba.app0000903/?namespace=nscfes)

#### Access Controls
- `G_Azure_HSV_update_clouddba_16547_prod`
- `G_Azure_HSV_update_clouddba_16547_qa`

---
### Azure AD

#### Service Principals

Azure SPN | Client ID | Keyvault |Notes
--- | --- | ---|---
dba-ServicePrinciple| c700dfff-7af2-4f13-b084-781f3a32b014 |[HumDBA-KeyVault-NPE ](https://portal.azure.com/#@inspirewellness.onmicrosoft.com/resource/subscriptions/69f17c09-86d0-4fb4-81a8-8952f51d49c2/resourceGroups/iti-dba-rg01/providers/Microsoft.KeyVault/vaults/HumDBA-KeyVault-NPE/secrets)|
dba-ServicePrinciple-NPE |513f576e-1732-4117-914c-e90d273c8d58 ||
dba-ServicePrinciple-PRD| 65645842-2ad1-4486-9fce-8053d3464037 ||
dbk-unity-catalog-acct-prd-spn| 55958b75-d1ee-4736-8b6b-ed4a3dce6f29|| Databricks Account Admin (Global Admin)

#### Keyvault



---
### Terraform Workspaces

---