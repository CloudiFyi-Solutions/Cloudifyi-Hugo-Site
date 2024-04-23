+++
title="Liquibase Concepts"
weight=11
+++

## Jump Menu
- [Liquibase Changelogs and Changesets](#liquibase-changelogs-and-changesets)
  - [Nested Changelogs](#nested-changelogs)
- [Liquibase Maintenance Tables](#liquibase-maintenance-tables)
- [Liquibase Flows](#liquibase-flows)
- [Liquibase Quality Checks](#liquibase-quality-checks)
<!-- - [Liquibase Pipelines](#liquibase-pipelines) -->


## Liquibase Changelogs and Changesets
![LiquibaseChangelogsChangesets](/images/Liquibase/Liquibase_changelogs_changesets1.jpg)

1. **Changesets** are the smallest unit of change in Liquibase. These can be in **SQL, JSON, YAML,** or **XML** format.

2. **Changelogs** are files containing one or more changesets. Changesets in a changelog file have to be the same format i.e. **SQL, JSON, YAML,** or **XML**.

3. **Root Changelogs** are changelogs that reference other changelogs. This has to be in **XML** format.

[Back to top](#jump-menu)


### Nested Changelogs

**Changelogs** can be nested using `include` or `includeAll` tags. This is used to structure changelogs.

![NestedChangelogs](/images/Liquibase/Liquibase_changelogs_changesets2.jpg)

In the diagram above the root changelog, **"root_changelog.xml"**, references **"changelog01.xml"** and **"changelog02.xml"** which in turn reference the changelogs that contain the actual changesets, **"chgFile01.sql"**, **"chgFile02.sql"**, **"chgFile03.sql"**, **"chgFile04.sql"** and **"chgFile05.sql"**.

**"root_changelog.xml"**, **"changelog01.xml"** and **"changelog02.xml" have** to be in **XML** format.

{{% notice style="note" %}}
For more details on managing changesets and changelogs see:
- [**Liquibase Changelogs**](lqb_12_abt_chglgs_chgsets.html)
- [Design Your Liquibase Project](https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern)
- [How to Structure a Complex Changelog](https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft)
{{% /notice %}}

[Back to top](#jump-menu)


## Liquibase Maintenance Tables

Liquibase uses two tables to apply and track it's changes. Liquibase automatically creates them if they don't exist when it runs. We'll be storing these tables in a Liquibase schema in each database.

- [DATABASECHANGELOGLOCK table][db_lock_table]
- [DATABASECHANGELOG table][db_chglog_table]

[Back to top](#jump-menu)


## Liquibase Flows

Allow us to configure Liquibase commands with their required parameters in a repeatable, standardized format that can be reused across all databases supported by Liquibase. 
Used as the building blocks for our Liquibase pipelines. 
Stored in a centralized Azure repository that will be managed by Data Platform Tools.
Same repository is also used to store our pre-configured Liquibase checks configuration files for ease of access.

[Back to top](#jump-menu)


## Liquibase Quality Checks

“Liquibase quality checks allow you to analyze changesets in your changelogs for specific commands and patterns that require close review early in the development life cycle. It can also be integrated into your build and deployment automation to prevent non-compliant changes from entering the pipeline.”

{{% notice style="note" %}}
For more details on Liquibase quality checks see:
- [**Liquibase Quality Checks**](lqb_13_abt_qlty_chks.html)
{{% /notice %}}

[Back to top](#jump-menu)


<!-- ## Liquibase Pipelines

Instead of having to memorize Liquibase commands, their various arguments and options, we have configured these commands in pipelines using Liquibase Flows and provided variables as a means to pass values to the necessary arguments and options. This provides teams with automation capabilities, simplifies use of Liquibase and minimizes errors at run time. As part of Liquibase onboarding teams will either clone our base Liquibase repository or copy the pipelines folder from said repository to their existing repository.

The table below summarizes our currently defined Liquibase pipelines that will be included in your Liquibase repository. The **Liquibase Commands Used** column lists the commands run and the order in which they are run as part of the pipeline.

| **Pipeline Name**  | **Description**   | **Liquibase Commands Used**   |
|  ---   |  ---   |  ---   |
| util-lqb-MSSQL-checks.yml | Used to test if your changelogs will pass quality checks. | `checks` |
| util-lqb-MSSQL-clear-checksums.yml | Used to reset the checksums when there's a checksum validation error. | `clear-checksums` |
| util-lqb-MSSQL-generate-changelog.yml | Used to generate changelog or snapshot of the existing database. Recommended to run this before your first Liquibase deployment. | `generate-changelog` |
| util-lqb-MSSQL-history.yml | Used to view previous Liquibase deployments and identify their deployment IDs etc. | `history` |
| util-lqb-MSSQL-rollback-one-changeset.yml   |  Used to rollback a single changeset. Requires the variables YAML file be updated with the changeset's author, ID and changelog path. | `validate`, `history`, `rollback-one-changeset-sql`,`checks`,  `rollback-one-changeset`, `history` |
| util-lqb-MSSQL-rollback-one-changesetSQL.yml | Shows the SQL Liquibase will execute to rollback a single changeset but **DOES NOT** execute the rollback. | `validate`, `rollback-one-changeset-sql` |
| util-lqb-MSSQL-rollback-one-update.yml | Used to rollback a deployment (a group of changesets that were executed together). Requires the variables YAML file be updated with the deployment ID. Retrieve deployment ID by running history pipeline. | `validate`, `history`, `rollback-one-update-sql`,`checks`,  `rollback-one-update`, `history` |
| util-lqb-MSSQL-rollback-one-updateSQL.yml | Shows the SQL Liquibase will execute to rollback a deployment (a group of changesets that were executed together) but **DOES NOT** execute the rollback. Requires the variables YAML file be updated with the deployment ID. Retrieve deployment ID by running history pipeline. | `validate`, `rollback-one-changeset-sql` |
| util-lqb-MSSQL-update.yml | Executes the specified changelogs in your main changelog to your database. | `validate`, `status`, `update-sql`,`checks`,  `update`, `history`  |

{{% notice style="note" %}}
For more details on Liquibase pipelines see:
- **Liquibase Pipelines** under **How Tos**.
{{% /notice %}}

[Back to top](#jump-menu) -->



 <!-- Reference Links -->
[db_lock_table]: https://docs.liquibase.com/concepts/tracking-tables/databasechangeloglock-table.html

[db_chglog_table]: https://docs.liquibase.com/concepts/tracking-tables/databasechangelog-table.html

[design_liquibase_project]: https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern 

[structure_changelog]: https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft