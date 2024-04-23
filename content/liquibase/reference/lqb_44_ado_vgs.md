+++
title="ADO Variable Group"
weight=44
+++

## Variable Group Reference

| **Name** | **Value** | **Description** |
| --- | --- | --- |
| `CHANGESET_AUTHOR` | cauthor | Used to rollback a single changeset. **Replace** with value of author attribute used in your changelog. |
| `CHANGESET_ID` | cid | Used to rollback a single changeset. **Replace** with value of the ID attribute used in your changelog. |
| `CHANGESET_PATH` | `<Your repo name>/<path to your changelog file>/example.sql` | Used to rollback a single changeset. **Replace** with path to the changelog that contains the changeset to rollback. e.g. **DataEng-Liquibase-Repo-Template-SCS/sqlfiles/example/tables/pass_checks_test.sql** |
| `DB_TYPE` | mssql | Used to generate changelogs. **Do not change** |
| `DEFAULT_SCHEMA` | dbo | Default schema where Liquibase should apply changes. **Replace** with schema used in your database. |
| `DEPLOYMENT_ID` | depid | Used to rollback one or more changesets applied together. To get this value check the **Show History** task in your update pipeline or run **utl-lqb-MSSQL-history.yml** pipeline. |
| `EMAIL_LIST` | sbabaniji@humana.com | **Replace** with email of whoever needs to be notifed for manual validations. |
| `ENV_NAME` | TEST | Environment to apply changes to. Valid values are **'DEV', 'INT', 'PRE', 'PROD', 'STAGE', 'QA', 'TEST', 'NPE', 'SBX'**, and **'DR'**. |
| `FLOW_FILE_CHECKS` | checks.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_CLEAR_CHECKSUMS` | clearChecksums.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_GENERATE_CHANGELOG` | generateChangelog.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_HISTORY` | history.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_ROLLBACK_ONE_CHANGESET` | rollbackOneChangeset.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_ROLLBACK_ONE_CHANGESET_SQL` | rollbackOneChangesetSQL.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_ROLLBACK_ONE_UPDATE` | rollbackOneUpdate.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_ROLLBACK_ONE_UPDATE_SQL` | rollbackOneUpdateSQL.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_STATUS` | status.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_UPDATE` | update.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_UPDATE_SQL` | updateSQL.yml | Flow file used by pipelines. **Do not change** |
| `FLOW_FILE_VALIDATE` | validate.yml | Flow file used by pipelines. **Do not change** |
| `GLAPI_ENV` | `Glapi-Intpipelines-<app service id>-PROD` | **Replace** with GLAPI environment name created during GLAPI configuration steps. |
| `HISTORY_FORMAT` | TABULAR | Output format for history command. Valid values are **TABULAR** and **TEXT**. TABULAR groups changesets by deployment ID and displays other information (timestamp, path, author, ID, and checksum) in individual table cells. TEXT displays the output as plain text. |
| `HVAULT_AGENT_POOL_NAME` | VS2022 | Name of agent pool used by HashiCorp Vault stages. **Do not change** |
| `HVault_App_Id_ENVIRONMENT` e.g., **`HVault_App_Id_TEST`** | test | **Replace** with app id provided during HashiCorp Vault onboarding. Valid ENVIRONMENT values are **'DEV', 'INT', 'PRE', 'PROD', 'STAGE', 'QA', 'TEST', 'NPE', 'SBX'**, and **'DR'**. **Click the lock button to make them secrets.** |
| `HVault_Role_Id_ENVIRONMENT` e.g., **`HVault_Role_Id_TEST`** | test | **Replace** with role id provided during HashiCorp Vault onboarding. Valid ENVIRONMENT values are **'DEV', 'INT', 'PRE', 'PROD', 'STAGE', 'QA', 'TEST', 'NPE', 'SBX'**, and **'DR'**. **Click the lock button to make them secrets.** |
| `LIQUIBASE_COMMAND_CHANGELOG_FILE` | `<Your repo name>/changelogs/main_changelog.xml` | **Replace** with full path to your root changelog e.g. **DataEng-Liquibase-Repo-Template-SCS/changelogs/main_changelog.xml** |
| `LIQUIBASE_HUB_MODE` | off | Turns off deprecated Liquibase Hub. **Do not change** |
| `LIQUIBASE_LIQUIBASE_SCHEMA_NAME` | lqbase_admin | Schema in which to create Liquibase maintenance tables. **Do not change.** |
| `LIQUIBASE_LOG_FORMAT` | JSON | Format for Liquibase logs. |
| `LIQUIBASE_LOG_LEVEL` | OFF | Determines level of logging displayed. Valid values are **OFF, SEVERE, WARNING, INFO** and, **FINE** |
| `LIQUIBASE_PRO_LICENSE_KEY` | Will be provided to you. | Liquibase license key to enable Pro features. |
| `LQB_AGENT_POOL_NAME` | Linux-NextGen_DockerOnly | Name of agent pool to use for Liquibase Docker container. **Do not change.**  |
| `LQB_CNTNR_TAG` | 4.21.1 | Liquibase Docker container tag. **Do not change.** |
| `LQB_CREDS_FILE` | architecture_liquibase_creds1 | Credentials used to authenticate to artifactory for Docker container image. **Do not change.** |
| `SCHEMAS` | dbo, lqbase_test | **Replace** with schemas to generate changelogs for when running generate changelog pipeline. |

{{% notice style="note" %}}
Click to return to:
- [**Liquibase Azure DevOps (ADO) Pipelines**](../how-tos/lqb_22_ht_ado_pipelines.html)
- [**On-Prem MSSQL Onboarding**](../how-tos/lqb_21_ht_mssql_onbrding.html)
{{% /notice %}}

[Back to top](#variable-group-reference)

