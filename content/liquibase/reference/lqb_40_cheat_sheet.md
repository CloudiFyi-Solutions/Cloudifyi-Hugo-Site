+++
title="Liquibase Cheat Sheet"
weight=40
+++

| **Term**  | ***Definition/Use*** |
|  ---   |  ---   |
| Liquibase commands | Liquibase runs six basic types of commands: ***update, rollback, snapshot, diff, status,*** and ***utility*** commands. |
| Changelog | Acts as a ledger of changes and contains a list of ***changesets*** (units of change) that Liquibase can execute on a database. |
| Changeset | A unit of change that occurs to a database and is indicated by a changeset tag `<changeset>` **in XML** or a changeset comment `--changeset` **in SQL**. Changesets are identified by the ***id***, and ***author attributes***, and ***changelog file classpath name***. |
| DATABASECHANGELOG | A table that ***tracks each changeset*** in the changelog ***by id, author, and the file where the changeset*** resides. The ***composite of “id”, “author”, and “filename” is unique across all rows*** of the table. If the table does not exist in the database, Liquibase creates one automatically. |
| DATABASECHANGELOGLOCK | A table ***used to ensure only one instance of Liquibase is running at one time***. It locks others out to prevent multiple Liquibase commands from being executed at the same time which could cause database conflicts. This assists in keeping other Devs, DBA's, or teams from overwriting your changes accidentally. |
| checks | Command that ***runs quality checks against your changelogs or your database or both***. |
| update | Command that ***deploys changes to your database***. |
| rollback | ***Reverts (rolls back) changes*** you have made to your database. |
| generateChangeLog | ***Generates a changelog that contains your objects*** (represented as changesets) and places the file in the same directory where the command was run. |

[Back to top](#jump-menu)

