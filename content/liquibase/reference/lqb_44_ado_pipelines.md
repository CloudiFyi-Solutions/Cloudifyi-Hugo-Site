+++
title="ADO Pipelines"
weight=44
+++

## ADO Pipelines Reference
The table below summarizes the currently defined in our ADO pipelines which will be included with your Liquibase repository. The **Liquibase Commands Used** column lists the commands run and the **order** in which they are run.

<style>
table th:first-of-type {
    width: 60%;
}
table th:nth-of-type(2) {
    width: 20%;
}
table th:nth-of-type(3) {
    width: 20%;
}
</style>

| **Name**  | **Description**   | **Liquibase Commands Used**   |
|  ---   |  ---   |  ---   |
| `util-lqb-`<`database_platform`>`-checks.yml` | Used to test if your changelogs will pass quality checks. | checks run |
| `util-lqb-`<`database_platform`>`-clear-checksums.yml` | Used to reset the checksums when there's a checksum validation error. | clear-checksums |
| `util-lqb-`<`database_platform`>`-generate-changelog.yml` | Used to generate changelog or snapshot of the existing database. Recommended to run this before your first Liquibase deployment. | generate-changelog |
| `util-lqb-`<`database_platform`>`-history.yml` | Used to view previous Liquibase deployments and identify their deployment IDs etc. | history |
| `util-lqb-`<`database_platform`>`-rollback-one-changeset.yml`   |  Used to rollback a single changeset. | validate, history, rollback-one-changeset-sql, checks run,  rollback-one-changeset, history |
| `util-lqb-`<`database_platform`>`-rollback-one-changesetSQL.yml` | Shows the SQL Liquibase will run to rollback a single changeset but **DOES NOT** execute the rollback. | validate, checks run, rollback-one-changeset-sql |
| `util-lqb-`<`database_platform`>`-rollback-one-update.yml` | Used to rollback a deployment (a group of changesets that were run together). | validate, history, rollback-one-update-sql, checks run,  rollback-one-update, history |
| `util-lqb-`<`database_platform`>`-rollback-one-updateSQL.yml` | Shows the SQL Liquibase will run to rollback a deployment (a group of changesets that were executed together) but **DOES NOT** execute the rollback. | validate, checks run, rollback-one-changeset-sql |
| `util-lqb-`<`database_platform`>`-update.yml` | Runs changelogs in your root changelog. | validate, status, update-sql, checks run, update, history  |
| `util-lqb-`<`database_platform`>`-updateSQL.yml` | Shows the SQL Liquibase will run but **DOES NOT** run them. | validate, checks run, update-sql |

{{% notice style="note" %}}
Click to return to:
- [**Liquibase Azure DevOps (ADO) Pipelines**](../how-tos/lqb_22_ht_ado_pipelines.html)
- [**On-Prem MSSQL Onboarding**](../how-tos/lqb_21_ht_mssql_onbrding.html)
- [**Liquibase Commands Reference**](#liquibase-commands-reference)
{{% /notice %}}

[Back to top](#ado-pipelines-reference)

