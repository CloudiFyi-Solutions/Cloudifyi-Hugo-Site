+++
title="ADO mssql-variables.yml"
weight=44
+++

## mssql-variables.yml Reference

| **Variable Name**  | **Pipeline Usage** | **Description**   |  
|  ---   |  ---   |  ---   |
| `LQB_VG` | All LQB pipelines | **Replace** with name of Liquibase variable group created for you during onboarding. |
| `LQB_CREDS_FILE` | All LQB pipelines/LQB stage(s) | ADO service connection file that will be used. **Do not change unless asked to do so.** |
| `GLAPI_PROD_VG` | Prod pipelines GLAPI tasks | **Replace** with name of GLAPI variable group created during GLAPI onboarding. |
| `GLAPI_ENV` | Prod pipelines GLAPI tasks | **Replace** with name of GLAPI environment created during GLAPI onboarding. |
<!-- | ENV_NAME | All LQB pipelines | Environment name, used to select HashiCorp Vault app Id and role ID from variable group and generate stage name in pipeline. Valid values are **'DEV', 'INT', 'PRE', 'PROD', 'STAGE', 'QA', 'TEST', 'NPE', 'SBX', 'BUILD', 'UTIL'**, and **'DR'**. |
| HVAULT_AGENT_POOL_NAME | All LQB pipelines/HVault_Creds stage | Agent pool used by Request Credentials task. **Do not change unless asked to do so.** |
| HVAULT_CONN_ENV | All LQB pipelines/HVault_Creds stage | HashiCorp Vault environment used by Request Credentials task. Valid options are **'PreProd'** and **'Prod'**. |
| LQB_AGENT_POOL_NAME | All LQB pipelines/LQB stage(s) | Agent pool used by Liquibase tasks. **Do not change unless asked to do so.** |
| LQB_CNTNR_TAG | All LQB pipelines/LQB stage(s) | Determines version of Liquibase container that will be used. **Do not change unless asked to do so.** |
| DEFAULT_SCHEMA | All LQB pipelines/LQB stage(s) | Default schema to use for the database connection. |
| LIQUIBASE_COMMAND_CHANGELOG_FILE | All LQB pipelines/LQB stage(s) | Path to your root changelog. Should include repo name e.g., DataEng-Liquibase-Repo-Template/changelogs/main_changelog.xml |
| LIQUIBASE_LOG_LEVEL | All LQB pipelines/LQB stage(s) | Sets Liquibase’s log level. Valid options are **OFF, SEVERE, WARNING, INFO, FINE**. |
| DB_TYPE | generate-changelog | Used by Liquibase to generate changelogs. Valid options are: **mssql, postgresql, oracle**. |
| SCHEMAS | generate-changelog | Comma-separated list of schemas to generate changelog for. |
| CHANGESET_AUTHOR | rollback-one-changeset rollback-one-changeset-sql | Author attribute of changeset to rollback. |
| CHANGESET_ID | rollback-one-changeset rollback-one-changeset-sql | ID attribute of changeset to rollback. |
| CHANGESET_PATH | rollback-one-changeset rollback-one-changeset-sql | Path to changelog that contains changeset to rollback. |
| DEPLOYMENT_ID | rollback-one-update rollback-one-update-sql | Specifies the deployment ID for the changesets intended for rollback. Run history pipeline to identify deployment ID. |
| HISTORY_FORMAT | history rollback-one-changeset rollback-one-update update | Specifies output format for the history pipeline. Valid options are **TABULAR, TEXT**. TABULAR groups changesets by deployment ID and displays other information (timestamp, path, author, ID, and checksum) in individual table cells. TEXT displays the output as plain text. | -->

{{% notice style="note" %}}
Click to return to:
- [**Liquibase Azure DevOps (ADO) Pipelines**](../how-tos/lqb_22_ht_ado_pipelines.html)
- [**On-Prem MSSQL Onboarding**](../how-tos/lqb_21_ht_mssql_onbrding.html)
{{% /notice %}}

[Back to top](#mssql-variablesyml-reference)

