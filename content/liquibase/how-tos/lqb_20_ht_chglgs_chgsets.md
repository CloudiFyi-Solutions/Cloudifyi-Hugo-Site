+++
title="Changelogs and Changesets"
weight=20
+++

## Jump Menu
- [Structuring Changelogs](#structuring-changelogs)
  - [`<include>` Tag](#include-tag)
  - [`<includeAll>` Tag](#includeall-tag)
- [How to create SQL Formatted Changesets](#how-to-create-sql-formatted-changesets)
  - [Example of SQL Formatted Changeset](#example-of-sql-formatted-changeset)
- [How to create JSON Formatted Changesets (MongoDB)](#json-formatted-changesets-mongodb)
  - [Example of JSON Formatted Changeset](#how-to-create-json-formatted-changesets-mongodb)


### Structuring Changelogs

To organize multiple changelogs, use the `include` and `includeAll` tags to create a **root (main/parent) changelog** and one or more **nested (child) changelogs**.

[Back to top](#jump-menu)


### `<include>` Tag

Use the `include` tag to target a **specific changelog** or **changelogs**.

{{% notice color="#78BE20" icon="eye" title="include Tag Example" %}}
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
  
  <include file="DataEng-Liquibase-Repo-Template-SCS/Release01/tables_changelog.sql" contextFilter="DEV and UAT or STG"/>
  <include file="DataEng-Liquibase-Repo-Template-SCS/changelogs/indexes_changelog.sql" contextFilter="DEV and UAT or STG"/>

</databaseChangeLog>
```
{{% /notice %}}

In the example above, **only** the changelogs, **tables_changelog.sql** and **indexes_changelog.sql**, will be run by Liquibase.

{{% notice style="note" %}}
Files listed will be run **sequentially**. In the example tables_changelog.sql will be run **before** indexes_changelog.sql.
{{% /notice %}}

[Back to top](#jump-menu)


### `<includeAll>` Tag

Use the `includeAll` tag to target **all changelogs in a specified path**.

{{% notice color="#78BE20" icon="eye" title="includeAll Tag Example" %}}
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
  
  <includeAll path="DataEng-Liquibase-Repo-Template-SCS/Release01/" contextFilter="DEV and UAT or STG"/>
  <includeAll path="DataEng-Liquibase-Repo-Template-SCS/Release02/" contextFilter="DEV and UAT or STG"/>

</databaseChangeLog>
```
{{% /notice %}}

In the example above, **all** changelogs located in the paths **DataEng-Liquibase-Repo-Template-SCS/Release01** and **DataEng-Liquibase-Repo-Template-SCS/Release02** will be run by Liquibase.

{{% notice style="note" %}}
Files in the specified directories will be run in **alphabetical** order.
{{% /notice %}}

[Back to top](#jump-menu)

## How to create SQL Formatted Changesets

We’ll use the SQL below to show how to create SQL formatted changesets.

{{% notice color="#78BE20" icon="eye" title="Sample SQL Script" %}}
```sql
CREATE TABLE dbo.test_table
(
  cx_id           INTEGER,
  cx_FirstName    VARCHAR(50), 
  cx_LastName     VARCHAR(50)
);

INSERT INTO dbo.test_table(cx_id, cx_FirstName, cx_LastName) VALUES (1, 'Temi', 'Adetunji');

INSERT INTO dbo.test_table(cx_id, cx_FirstName, cx_LastName) VALUES (2, 'Vivek', 'Balakrishnan');

ALTER TABLE dbo.test_table1
ADD CONSTRAINT PK_id PRIMARY KEY (cx_id);

ALTER TABLE dbo.test_table 
ADD cx_DOB DATETIME;

UPDATE dbo.test_table SET cx_DOB = '06/27/1978' WHERE cx_id = 1;

UPDATE dbo.test_table SET cx_DOB = '01/10/1980' WHERE cx_id = 2;

CREATE PROCEDURE dbo.test_sp   
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50)  
AS
    SELECT cx_FirstName, cx_LastName, Department  
    FROM dbo.test_table  
    WHERE cx_FirstName = @FirstName AND LastName = @cx_LastName  
    AND cx_DOB IS NOT NULL;  

ALTER PROCEDURE dbo.test_sp   
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DateOfBirth DATETIME
AS
    SELECT cx_FirstName, cx_LastName, Department  
    FROM dbo.test_table  
    WHERE cx_FirstName = @FirstName AND LastName = @cx_LastName  
    AND cx_DOB = @DateOfBirth;  
```
{{% /notice %}}

[Back to top](#jump-menu)

### Example of SQL Formatted Changeset

{{% notice color="#78BE20" icon="eye" title="Sample SQL Formatted Changeset" %}}
```sql
--liquibase formatted sql

--changeset sbabaniji:release-07142023-001
CREATE TABLE dbo.test_table
(
  cx_id           INTEGER,
  cx_FirstName    VARCHAR(50), 
  cx_LastName     VARCHAR(50)
);
--rollback DROP TABLE dbo.test_table;

--changeset sbabaniji:release-07142023-002
INSERT INTO dbo.test_table(cx_id, cx_FirstName, cx_LastName) VALUES (1, 'Temi', 'Adetunji');
--rollback DELETE FROM dbo.test_table WHERE cx_id = 1;

--changeset sbabaniji:release-07142023-003
INSERT INTO dbo.test_table(cx_id, cx_FirstName, cx_LastName) VALUES (2, 'Vivek', 'Balakrishnan');
--rollback DELETE FROM dbo.test_table WHERE cx_id = 2;

--changeset sbabaniji:release-07142023-004
ALTER TABLE dbo.test_table
ADD CONSTRAINT pk_id PRIMARY KEY (cx_id);
--rollback ALTER TABLE dbo.test_table DROP CONSTRAINT pk_id;

--changeset sbabaniji:release-07142023-005
ALTER TABLE dbo.test_table 
ADD cx_DOB DATETIME;
--rollback ALTER TABLE dbo.test_table DROP COLUMN cx_DOB;

--changeset sbabaniji:release-07142023-006
UPDATE dbo.test_table SET cx_DOB = '06/27/1978' WHERE cx_id = 1;
--rollback UPDATE dbo.test_table SET cx_DOB = NULL cx_id = 1;

--changeset sbabaniji:release-07142023-007
UPDATE dbo.test_table SET cx_DOB = '01/10/1980' WHERE cx_id = 2;
--rollback UPDATE dbo.test_table SET cx_DOB = NULL cx_id = 2;

--changeset sbabaniji:release-07142023-008
CREATE PROCEDURE dbo.test_sp   
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50)  
AS
    SELECT cx_FirstName, cx_LastName, Department  
    FROM dbo.test_table  
    WHERE cx_FirstName = @FirstName AND LastName = @cx_LastName  
    AND cx_DOB IS NOT NULL;
--rollback DROP PROCEDURE dbo.test_sp;

--changeset sbabaniji:release-07142023-009
ALTER PROCEDURE dbo.test_sp   
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DateOfBirth DATETIME
AS
    SELECT cx_FirstName, cx_LastName, Department  
    FROM dbo.test_table  
    WHERE cx_FirstName = @FirstName AND LastName = @cx_LastName  
    AND cx_DOB = @DateOfBirth;
--rollback ALTER PROCEDURE dbo.test_sp   
--rollback     @FirstName VARCHAR(50),
--rollback     @LastName VARCHAR(50)  
--rollback AS
--rollback     SELECT cx_FirstName, cx_LastName, Department  
--rollback     FROM dbo.test_table  
--rollback     WHERE cx_FirstName = @FirstName AND LastName = @cx_LastName  
--rollback     AND cx_DOB IS NOT NULL;

```
{{% /notice %}}

1. Header comment <span style="color:red">**(Required)**</span> `--liquibase formatted sql`. **This must be on the first line of SQL formatted changelogs**.

2. Changeset comment with author and ID attributes <span style="color:red">**(Required)**</span>. `--changeset author:id`.  Each changeset must have a changeset comment that includes the author and ID attributes separated with a colon.

   - **The combination of author and ID must be unique** across all changesets and changelogs.
   - **Liquibase executes changesets sequentially** so order your changesets in the order you want your changes to be executed.
   - Each team is responsble for deciding it's author and ID naming conventions. 
     - Best practice is the author should be the person creating the changelogs e.g. `sbabaniji`.
     - ID should be a value that can be incremented e.g. `release-07142023-001`, `release-07142023-002` etc.
  
3. Rollback comment followed by statement used to roll back changeset <span style="color:red">**(Required)**</span> `--rollback <SQL statement>;`.

4. Multi-line rollback comments can be used for rollback SQL statements that span mulitple lines.


{{% notice style="note" %}}
Additional **optional** attributes can be added after the author and ID attributes. See [changeset attributes](https://docs.liquibase.com/concepts/changelogs/changeset.html#:~:text=as%20inserting%20data.-,Attributes,-You%20can%20apply) for attributes that can be used.


Coming soon: the ability to use rollback scripts.
{{% /notice %}}

[Back to top](#jump-menu)


## How to create JSON Formatted Changesets (MongoDB)

We’ll use the JSON `insertMany` script below to show how to create a JSON formatted changeset.

{{% notice color="#78BE20" icon="eye" title="Sample MongoDB JSON Insert Script" %}}
```json
db.students.insertMany(
    [
        { id: 1, cx_FirstName: "Temi", cx_LastName: "Adetunji"},
        { id: 2, cx_FirstName: "Vivek", cx_LastName: "Balakrishnan"},
        { id: 3, cx_FirstName: "John", cx_LastName: "Smith"}
    ]
)
```
{{% /notice %}}

[Back to top](#jump-menu)


### Example of JSON Formatted Changeset

{{% notice color="#78BE20" icon="eye" title="Sample JSON formatted changeset" %}}
```json
{
    "databaseChangelog":
    [
        {
            "changeSet": {
                "id": "data_eng_011123_1",
                "author": "sbabaniji",
                "runWith": "mongosh",
                "changes": [
                    {
                        "mongoFile": {
                            "dbms": "mongodb",
                            "path": "insert-students.js",
                            "relativeToChangelogFile": true
                        }
                    }
                ],
                "rollback": [
                    {
                        "mongo": {
                            "mongo": "db.students.drop()"
                        }
                    }
                ]
            }
        }
    ]
}
```
{{% /notice %}}

1. Header (Required). 
   ```
   "databaseChangelog": [
   ]
   ```
   This must be the first attribute of JSON formatted changelogs.

2. Changeset with id and author attributes (Required). 
   ```
   "changeSet": {
        "id": <value>,
        "author": <value>
   }
   ```  
  
3. Rollback attribute (Recommended).
   ```
   "rollback": [
   ]
   ``` 

{{% notice style="note" %}}
See [Example JSON changelog](https://docs.liquibase.com/concepts/changelogs/json-format.html) where NoSQL statements are declared directly in the changelog.
{{% /notice %}}

[Back to top](#jump-menu)



 <!-- Reference Links -->
[chglog_formats]: https://docs.liquibase.com/concepts/changelogs/home.html#:~:text=Liquibase%20Project.-,File%20formats,-Your%20changelogs

[design_liquibase_project]: https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern 

[structure_changelog]: https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft

[preconditions]: https://docs.liquibase.com/concepts/changelogs/preconditions.html

[list_chglog_attr]: https://docs.liquibase.com/concepts/changelogs/attributes/home.html

[list_chgset_attr]: https://docs.liquibase.com/concepts/changelogs/changeset.html#:~:text=as%20inserting%20data.-,Attributes,-You%20can%20apply