+++
title="Liquibase Commands"
weight=43
+++

## Liquibase Commands Reference

Below are the Liquibase commands currently used in our Azure DevOps pipelines and GitHub workflows.

| **Liquibase Command**  | **Description**   |
|  ---   |  ---   |
| `checks run` | Executes checks using the checks settings file against a changelog, database, or both. |
| `clear-checksums` | Clears all checksums and nullifies the MD5SUM column of the DATABASECHANGELOG table so they will be re-computed on the next database update. |
| `generate-changelog` | Creates a changelog file that has a sequence of changesets which describe how to re-create the current state of the database. Doesn't include DML. |
| `history` | Lists all deployed changesets and their deploymentIds. |
| `rollback-one-changeset` | **Reverts (rolls back) a specified changeset** made during a previous run of the update command.  |
| `rollback-one-changeset-sql` | A **helper** command that allows you to inspect the SQL Liquibase will run to **revert one changeset specified** in the rollback-one-changeset command. It **DOES NOT** revert the changeset in the database.  |
| `rollback-one-update` | **Reverts (rolls back) all changesets related by a specific deploymentId** that was made during a previous change to your database. To obtain the deploymentID reveiw the output of the history task in the pipeline or run the history pipeline. |
| `rollback-one-update-sql` | A **helper** command that allows you to inspect the SQL Liquibase will run to **revert all changesets associated with the deploymentID specified** in the rollback-one-update command. It **DOES NOT** revert the changesets in the database. |
| `status` | **Lists all unapplied changesets**, their ids, authors, and file paths. |
| `update` | **Applies any unapplied changes** in the changelog file to the database. |
| `update-sql` | A **helper** command that allows you to inspect the SQL Liquibase will run while using the **update** command. It **DOES NOT** apply the SQL to the database. |
| `validate` | Checks and identifies any possible errors in a changelog. |

{{% notice style="note" %}}
Click to return to:
- [**Liquibase Azure DevOps (ADO) Pipelines**](../how-tos/lqb_22_ht_ado_pipelines.html)
- [**On-Prem MSSQL Onboarding**](../how-tos/lqb_21_ht_mssql_onbrding.html)

Click [Liquibase Commands](https://docs.liquibase.com/commands/home.html) for details on all implemented Liquibase commands.
{{% /notice %}}

[Back to top](#liquibase-commands)


 <!-- Reference Links -->
[lqb_cmds]: https://docs.liquibase.com/commands/home.html

