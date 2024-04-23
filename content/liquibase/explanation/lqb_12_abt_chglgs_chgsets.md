+++
title="What are Changelogs and Changesets?"
weight=12
+++

## Jump Menu
- [Changelogs](#changelogs)
  - [Changelog File Formats](#changelog-file-formats)
  - [Structuring Changelogs](#structuring-changelogs)
- [Changesets](#changesets)
- [Attributes](#attributes)
  - [Attribute Scope](#attribute-scope)
  - [Changelog Attributes](#changelog-attributes)
  - [Changeset Attributes](#changeset-attributes)


## Changelogs

Liquibase uses a text-based **changelog** file to **sequentially** list all changes made to your database. This ledger helps Liquibase audit your database and execute any changes that are not yet applied. You can store and version your changelog in any source control tool.

Changelogs can be nested in a **root changelog**, minimizing conflicts between different teams or workflows. **Preconditions, contexts, labels,** and other attributes can be specified in your changelog to precisely control which changesets run—and in which environment.

{{% notice color="#78BE20" icon="eye" title="Root changelog example" %}}
```xml
<?xml version="1.1" encoding="UTF-8"?>

<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
        xmlns:pro="http://www.liquibase.org/xml/ns/pro"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-latest.xsd
        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd
        http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-latest.xsd">
  
  <include file="DataEng-Liquibase-Repo-Template-SCS/changelogs/example_changelog.xml" contextFilter="DEV and UAT or STG"/>

</databaseChangeLog>
```
{{% /notice %}}

[Back to top](#jump-menu)


### Changelog File Formats

Liquibase changelogs can be written in **SQL, XML, YAML, or JSON** formats. Liquibase determines the changelog format by the file extension and the changelog header. Your root changelog **must** be in **XML** format. 

{{% notice style="note" %}}
See [changelog and changeset file formats](https://docs.liquibase.com/concepts/changelogs/home.html#:~:text=Liquibase%20Project.-,File%20formats,-Your%20changelogs) for all file formats.
{{% /notice %}}

[Back to top](#jump-menu)


### Structuring Changelogs

To organize multiple changelogs, you can use the `include` and `includeAll` tags to create a **root (main/parent) changelog** and one or more **nested (child) changelogs**.

{{% notice style="note" %}}
For details on how to structure changelogs see:
- [**Liquibase Changelogs and Changesets How-Tos**](../how-tos/lqb_22_ht_chglgs_chgesets.html)
- [Design Your Liquibase Project](https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern)
- [How to Structure a Complex Changelog](https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft)
{{% /notice %}}

[Back to top](#jump-menu)


## Changesets

An individual **unit of change** in your changelog is called a **changeset**. Changesets are stored in your changelog and contain **change types** that specify what each change does e.g., creating a new table or inserting data into a table.

{{% notice style="note" %}}
SQL changesets do not need a change type specified.
We will be discussing SQL and JSON changesets in this How To.
{{% /notice %}}

[Back to top](#jump-menu)

## Attributes

Attributes can be used in changelogs and changesets to:

- Reference other changelogs from within a changelog.
- Break up your primary changelog into more manageable pieces.
- Specify when, how, and under what conditions to run changes in a changeset.
- Define the behavior of table columns.

[Back to top](#jump-menu)


## Attribute Scope

An attribute's scope refers to what it affects i.e., the entire changelog (global), a particular changeset (local), or an element nested inside a particular changeset, like a column. Most attributes have only one valid scope, but some can go in either the changelog or changeset, such as [Preconditions][preconditions].

[Back to top](#jump-menu)


## Changelog Attributes

[List of changelog attributes.][list_chglog_attr]

[Back to top](#jump-menu)


## Changeset Attributes

[List of changeset attributes.][list_chgset_attr]

[Back to top](#jump-menu)


 <!-- Reference Links -->
[chglog_formats]: https://docs.liquibase.com/concepts/changelogs/home.html#:~:text=Liquibase%20Project.-,File%20formats,-Your%20changelogs

[design_liquibase_project]: https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern 

[structure_changelog]: https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft

[preconditions]: https://docs.liquibase.com/concepts/changelogs/preconditions.html

[list_chglog_attr]: https://docs.liquibase.com/concepts/changelogs/attributes/home.html

[list_chgset_attr]: https://docs.liquibase.com/concepts/changelogs/changeset.html#:~:text=as%20inserting%20data.-,Attributes,-You%20can%20apply