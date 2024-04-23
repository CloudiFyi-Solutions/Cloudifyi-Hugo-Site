+++
title="What are Quality Checks?"
weight=13
+++

## Jump Menu
- [Liquibase Quality Checks](#liquibase-quality-checks)
- [Severity and Exit Codes](#severity-and-exit-codes)
- [Quality Checks Table](#quality-checks-table)


## Liquibase Quality Checks

“Liquibase quality checks allow you to analyze changesets in your changelogs for specific commands and patterns that require close review early in the development life cycle. It can also be integrated into your build and deployment automation to prevent non-compliant changes from entering the pipeline.”

[Back to top](#jump-menu)


## Severity and Exit Codes

Each quality check has a severity level and an exit code associated with. Both are displayed when the checks complete and are used to determine the status of the completed check. Exit codes have an additional function which is enabling automation tools make decisions based on the status of the completed check.

The table below lists the severity levels and their corresponding exit code.

| Severity     | *Exit/Return Code* | *Behavior* |
|    ---       |     ---            |  ---       |
| **INFO**     |     0              |  *Non-blocking. Liquibase pipeline will display warning but continue.*       |
| **MINOR**    |     1              |  *Non-blocking. Liquibase pipeline will display warning but continue.*       |
| **MAJOR**    |     2              |  *Non-blocking. Liquibase pipeline will display warning but continue.*       |
| **CRITICAL** |     3              |  *Blocking. Liquibase pipeline will fail and exit at the quality checks task.*       |
| **BLOCKER**  |     4              |  *Blocking. Liquibase pipeline will fail and exit at the quality checks task.*       |

[Back to top](#jump-menu)


## Quality Checks Table

The following checks have been configured to enforce Humana database standards and will cause Liquibase pipelines to fail.

|         Name              | *Severity* | *Scope*    | *Definition/Use* |
|         ---               |   ---      |  ---       |  ---       |
| **SqlAlterDatabase**      |     4      |  changelog |  *Blocks when changelog contains "ALTER DATABASE" statements.*       |
| **SqlBackupDatabase**     |     4      |  changelog |  *Blocks when changelog contains "BACKUP DATABASE" statements.*       |
| **SqlDropDatabase**       |     4      |  changelog |  *Blocks when changelog contains "DROP DATABASE" statements.*       |
| **SqlRestoreDatabase**    |     4      |  changelog |  *Blocks when changelog contains "RESTORE DATABASE" statements.*       |
| **SqlGrantOptionWarn**    |     4      |  changelog |  *Blocks when changelog contains "GRANT…WITH GRANT OPTION" statements.*       |
| **SqlGrantAdminWarn**     |     4      |  changelog |  *Blocks when changelog contains "GRANT…WITH ADMIN OPTION" statements.*       |
| **RollbackRequired**      |     4      |  changelog |  *Blocks when changelog does not contain a rollback.*       |
| **OneChangePerChangeset** |     4      |  changelog |  *Blocks when Liquibase best practice of limiting changesets to one statement or change is not followed.*       |

{{% notice style="note" %}}
For details on Liquibase quality checks see:
- [**Liquibase Quality Checks How-Tos**](../how-tos/lqb_23_ht_qlty_chks.html)
- [Liquibase Quality Checks Overview](https://docs.liquibase.com/commands/quality-checks/home.html)
- [Liquibase Quality Checks Command](https://docs.liquibase.com/commands/quality-checks/checks/home.html)
- [Liquibase Quality Checks Severity and Exit Codes](https://docs.liquibase.com/commands/quality-checks/workflows/use-quality-checks-auto-severity-exit-code.html)
{{% /notice %}}

[Back to top](#jump-menu)

