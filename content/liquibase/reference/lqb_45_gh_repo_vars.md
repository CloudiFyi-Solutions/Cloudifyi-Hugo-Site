+++
title="GitHub Repository Variables"
weight=45
+++

## Repository Variables Reference

| **Name** | **Value** | **Description** |
| --- | --- | --- |
| `CHANGESET_AUTHOR` | your_changeset_author | Used to rollback a single changeset. **Replace** with value of author attribute used in your changelog. |
| `CHANGESET_ID` | your_changeset_id | Used to rollback a single changeset. **Replace** with value of the ID attribute used in your changelog. |
| `CHANGESET_PATH` | path_to_your_changelog | Used to rollback a single changeset. **Replace** with path to the changelog that contains the changeset to rollback. e.g. **pgsql_examples/release001/rel001.sql** |
| `DB_NM_ENVIRONMENT` e.g. **`DB_NM_DEV`** | your_db_name | Database to apply changes to e.g. **devdb** |
| `DB_SVR_ENVIRONMENT` e.g. **`DB_SVR_DEV`** | your_server_name | Database server to apply changes to e.g. **jdbc:postgresql://dpe-dev.postgres.database.azure.com:5432** |
| `DB_TYPE` | postgresql | Used to generate changelogs. **Do not change** |
| `DEFAULT_SCHEMA` | default_schema_name | Default schema where Liquibase should apply changes. **Replace** with schema used in your database. e.g. **dpe**|
| `DEPLOYMENT_ID` | your_deployment_id | Used to rollback one or more changesets applied together. To get this value check the **Show History** task in your deployment workflow. |
| `EMAIL_LIST` | distribution_list_of_approvers | **Replace** with email of whoever needs to be notifed for manual validations. |
| `ENV_NAME` | DEV | Environment to apply changes to. Valid values are **'DEV', 'INT', 'PRE', 'PROD', 'STAGE', 'QA', 'TEST', 'NPE', 'SBX'**, and **'DR'**. |
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
| `HISTORY_FORMAT` | TABULAR | Output format for history command. Valid values are **TABULAR** and **TEXT**. TABULAR groups changesets by deployment ID and displays other information (timestamp, path, author, ID, and checksum) in individual table cells. TEXT displays the output as plain text. |
| `LIQUIBASE_COMMAND_CHANGELOG_FILE` | ./changelogs/main_pgsql_changelog.xml | Path to your root changelog. **Do not change** |
| `LIQUIBASE_HUB_MODE` | off | Turns off deprecated Liquibase Hub. **Do not change** |
| `LIQUIBASE_LIQUIBASE_SCHEMA_NAME` | lqbase_admin | Schema in which to create Liquibase maintenance tables. **Do not change.** |
| `LIQUIBASE_LOG_FORMAT` | JSON | Format for Liquibase logs. |
| `LIQUIBASE_LOG_LEVEL` | OFF | Determines level of logging displayed. Valid values are **OFF, SEVERE, WARNING, INFO** and, **FINE** |
| `LQB_AGENT_POOL_NAME` | internal-ubuntu | Name of GitHub runner to use for Liquibase Docker container. **Do not change.**  |
| `LQB_CNTNR_TAG` | 4.21.0 | Liquibase Docker container tag. **Do not change.** |
| `LQB_CNTR_PATH` | humana-data-platform-eng-docker-virtual.jfrog.io | Artifactory repository. **Do not change.** |
| `SCHEMAS` | comma_separated_list_of_schemas | **Replace** with schemas to generate changelogs for when running generate changelog pipeline. e.g. **dpe, lqbase_test** |

{{% notice style="note" %}}
Click to return to:
- [**Liquibase GitHub (GH) Workflows**](../how-tos/lqb_21_ht_gh_workflows.html)
- [**Azure PostgreSQL Onboarding**](../how-tos/lqb_21_ht_pgsql_onbrding.html)
{{% /notice %}}

[Back to top](#repository-variables-reference)

