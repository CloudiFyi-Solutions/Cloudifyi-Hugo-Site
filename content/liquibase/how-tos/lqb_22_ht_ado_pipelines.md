+++
title="Azure DevOps (ADO) Pipelines"
weight=22
+++

## Jump Menu
- [Prerequisites](#prerequisites)
- [Process Summary](#process-summary)
- [mssql-variables.yml Reference](#mssql-variablesyml-reference)
- [Liquibase ADO Pipelines Reference](#liquibase-ado-pipelines-reference)
- [Liquibase Commands Reference](#liquibase-commands-reference)

## Prerequisites
- Review [**Liquibase Concepts**](../explanation/lqb_11_abt_cncpts.html).
- Review [**Liquibase Changelogs and Changesets**](../explanation/lqb_12_abt_chglgs_chgsets.html).
- Review [**Liquibase Quality Checks**](../explanation/lqb_13_abt_qlty_chks.html).
- Review [**Changelogs and Changesets How-Tos**](../how-tos/lqb_20_ht_chglgs_chgsets.html).
- Review [**Quality Checks How-Tos**](../how-tos/lqb_20_ht_qlty_chks.html).
- Define your changelog strategy using [Design Your Liquibase Project][design_liquibase_project] and [How to Structure a Complex Changelog][structure_changelog] as guides.


## Process Summary
- Create a feature or environment branch.
- Create changelogs (and changesets).
- Update repository variables.
- Run **PGSQL Liquibase Generate Changelog** prior to initial deployment to create a snapshot of your database.
- Run **PGSQL Liquibase Validate** to validate your changelogs.
- Run **PGSQL Liquibase Quality Checks** to ensure your changelogs will pass the required quality checks.
- Run **PGSQL Liquibase Update** to apply your changes.
- Run **PGSQL Liquibase Rollback One Changeset** to roll back a single changeset
- Run **PGSQL Liquibase Rollback One Update** to roll back a deployment (multiple changes that were applied together).

[Back to top](#jump-menu)


<!-- ## How to use Liquibase ADO Pipelines -->

<!-- Process workflow.
Identify task/pipeline.
Pipeline detailed steps. -->

<!-- [Back to top](#jump-menu) -->


## mssql-variables.yml Reference

[**mssql-variables.yml Table**](../reference/lqb_44_mssql_vars.html#mssql-variablesyml-reference)

[Back to top](#jump-menu)


## Liquibase ADO Pipelines Reference

[**ADO Pipelines Table**](../reference/lqb_44_ado_pipelines.html#ado-pipelines-reference)

[Back to top](#jump-menu)


## Liquibase Commands Reference

[**Liquibase Commands Table**](../reference/lqb_43_commands.html#liquibase-commands-reference)

[Back to top](#jump-menu)