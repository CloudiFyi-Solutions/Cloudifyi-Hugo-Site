+++
title="On-Prem MSSQL Onboarding"
weight=21
+++

## Jump Menu
- [Quickstart](#quickstart)
- [Prerequisites](#prerequisites)
- [Liquibase Onboarding](#liquibase-onboarding)
- [HashiCorp Vault Onboarding](#hashicorp-vault-onboarding)
  - [Eligibility Check](#eligibility-check)
  - [Request Flow](#request-flow)
    - [Provided Keys](#provided-keys)
  - [Access Request Sample](#access-request-sample)
    - [SQL Master Account](#sql-master-account)
    - [Request RFA for server and database](#request-rfa-for-server-and-database)
    - [RFA Result](#rfa-result)
  - [Check permissions have been granted correctly](#check-permissions-have-been-granted-correctly)
- [GLAPI Onboarding](#glapi-onboarding)
- [Database Onboarding](#database-onboarding)
- [Configure Variable Group](#configure-variable-group)
  - [Variable Group Configuration](#variable-group-configuration)
  - [Variable Group Reference](#variable-group-reference)
  
<!-- - [Configure Pipelines](#configure-pipelines) -->

## Quickstart
1. Complete Prerequisites.
1. Complete Onboarding steps.
1. Complete GLAPI steps.
1. Configure your Liquibase variable group.
<!-- 1. Review Liquibase Pipelines How-Tos.
1. Review Reference section. -->

[Back to top](#jump-menu)


## Prerequisites
- Teams must already be onboarded to Azure DevOps (ADO).
- Teams must know how to work with repositories in ADO.
- Review [**Liquibase Concepts**](../explanation/lqb_11_abt_cncpts.html).
- Review [**Liquibase Changelogs and Changesets**](../explanation/lqb_12_abt_chglgs_chgsets.html).
- Review [**Liquibase Quality Checks**](../explanation/lqb_13_abt_qlty_chks.html).
- Review [**Changelogs and Changesets How-Tos**](../how-tos/lqb_20_ht_chglgs_chgsets.html).
- Review [**Quality Checks How-Tos**](../how-tos/lqb_20_ht_qlty_chks.html).
- Define your changelog strategy using [Design Your Liquibase Project][design_liquibase_project] and [How to Structure a Complex Changelog][structure_changelog] as guides.




[Back to top](#jump-menu)


## Liquibase Onboarding
- Submit a [**go/genericrequest**][generic_request] and assign to **DB_Tools_Eng**. 
- In the **Description of other** field copy & paste the text below.
  ```
  Liquibase Pro Onboarding for On-prem MSSQL
  ```
- In the **Summary of Issue** field copy & paste the text below. Replace the text in `<` `>` with the appropriate values.
  ```
  Liquibase Pro Onboarding for On-prem MSSQL - <Application Name> - <Team Name>
  ```
- In the **Description of request** field copy & paste the text below. Replace the text in `<` `>` with the appropriate values.
  ```
  LOB - <Your Line of Business>
  Application Name - <Your application name>
  Team Name - <Your team name>
  Requester - <Requester first & last name>
  Email: <Requester email address>

  Environment: On-prem
  Database Platform: MSSQL
  Repository Platform: Azure DevOps
  ADO Project Name: <Your ADO project name>

  Environment/Server Name/Database Name:
  <Environment>/<Server Name>/<Database Name>
  ```
- See example below.

![LiquibaseGenericRequest1](/images/Liquibase/mssql/mssql_lqb_gen_req01.png)

- The following ADO components will be created for you: 
  - repository
  - variable group
  - pipelines
- Modify the changelog directory based on the strategy chosen.
- Configure the variable group following steps in [**Configure Variable Group**](#configure-variable-group) section.
- Modify the mssql-variables.yml file located in the pipelines directory of your repo with the variables for your environment.

[Back to top](#jump-menu)


## HashiCorp Vault Onboarding
### Eligibility Check
- The DBAs have the final say on which databases are eligible but start with the assumption that the answer will be yes assuming you are not exempted because of database size and application criticality.
- Provide DBA team with the following:
    - Team Name.
    - Contact name plus email.
    - ServiceNow App Service Id.
    - The Azure DevOps team project that your release pipeline will be executing in.
    - A list of all SQL Server database servers/names that you will be deploying to. For example:

| **Server**     | **App Service ID** | **Environment** |  **Database Name** | **Application Name** | **Database Size (prod only)** |
|  ---   |  ---   |  ---   |  ---   |  ---   |  ---   |
| Lousqlwts100     |     AppSvc12345              |  Test       |  MyDatabase   |  MyGreatAppDev   |  ---   |
| Lousqlwts100    |     AppSvc12345             |  QA       |  MyDatabase   |  MyGreatAppDev   |  ---   |
| Lousqlwts100    |     AppSvc12345             |  Prod       |  MyDatabase   |  MyGreatAppDev   |  *10GB*   |


{{% notice style="note" %}}
If this is for a SQL Server cluster please provide the cluster name instead of active node e.g., LOUSQLWPC99A01 instead of LOUSQLWPC99SS01.
{{% /notice %}}

[Back to top](#jump-menu)


### Request Flow
1. Start your Request For Access for necessary database permissions.
1. Once the RFA is approved, fill out the [vault intake form][vault_intake_form] to onboard your database for the HashiCorp Vault process. See [vault docs][vault_docs] for help filling out the form.

[Back to top](#jump-menu)


### Provided Keys
After RFA & process approval, you will receive an email like the following for each server/database you requested.

![LiquibaseChangelogsChangesets](/images/Liquibase/Liquibase_vault_Onboarding01.png)

[Back to top](#jump-menu)


### Access Request Sample
#### **SQL Master Account**
For creating SQL Server credentials, we use a master account with securityadmin on the server level and db_owner on DB.

- Master account is HUMAD\SqlDeployEnabler.
  
[Back to top](#jump-menu)

#### **Request RFA for server and database**
SQL Server should be in mixed authentication mode to allow SQL user accounts.
You can request server authorization by RFA:
- [go/rfa][go_rfa] -> **SQL Access**
- You need to request for **HUMAD\SqlDeployEnabler**.

[Back to top](#jump-menu)


![LiquibaseRFA1](/images/Liquibase/Liquibase_rfa.png)

[Back to top](#jump-menu)

![LiquibaseRFA2](/images/Liquibase/Liquibase_rfa02.png)

[Back to top](#jump-menu)

![LiquibaseRFA3](/images/Liquibase/Liquibase_rfa03.png)

[Back to top](#jump-menu)

![LiquibaseRFA4](/images/Liquibase/Liquibase_rfa04.png)

[Back to top](#jump-menu)

![LiquibaseRFA5](/images/Liquibase/Liquibase_rfa05.png)

[Back to top](#jump-menu)

![LiquibaseRFA6](/images/Liquibase/Liquibase_rfa06.png)

[Back to top](#jump-menu)


#### **RFA Result**
For creating SQL Server credentials, we use a master account with securityadmin on the server level and db_owner on DB.

Add Entitlement(s)

EIPAM - SQL:

- Entitlement : Add access to existing system account(s)

Account ID : humad\SqlDeployEnabler

- Entitlement : SQL access
    Server : YOURDBSERVERNAME
    
    Role : securityadmin
    
    Server : YOURDBSERVERNAME
    
    Database : YOURDBNAME
    
    Role : db_owner
    
    What tasks need to be performed: Other - Create temporary users that will be       created with Vault interaction, to deploy SQL changes, Refer Data  Engineering Team if more information is needed
    
    How often will you perform these specific tasks: Other
    
    Is this access needed for a temporary time frame: No
    
    What effect would denying this request have on your responsibilities : We      are implementing Liquibase Pro for automating database schema changes, and     we need this access to implement this.
    
    Has the vendor provided the requirements for this access : No

[Back to top](#jump-menu)


### Check permissions have been granted correctly
- Navigate to [**go/dba**][go_dba].
  
- Hover over the **"Service"** tab and select **"SQL_DBMS"** type under **"Search services"**.

![LiquibaseGoDBA1](/images/Liquibase/Liquibase_godba01.png)

[Back to top](#jump-menu)


- Make sure **"Service"** is checked, type your server name in **"Service Name"** field and click **"Search"**.

![LiquibaseGoDBA2](/images/Liquibase/Liquibase_godba02.png)

[Back to top](#jump-menu)


- Click on your server and go to **"Security"** tab.

![LiquibaseGoDBA3](/images/Liquibase/Liquibase_godba03.png)

[Back to top](#jump-menu)


- Search for and click on **"HUMAD/SqlDeployEnabler"**, check that it has **"securityadmin"** as type **"SERVER_ROLE"** on the **"dbo"** schema in your database.

![LiquibaseGoDBA4](/images/Liquibase/Liquibase_godba04.png)

[Back to top](#jump-menu)

## GLAPI Onboarding
- Complete **ONLY** the [**"Obtaining a change template"**][glapi_chg_template] section.
- Complete [**"Variable group setup"**][var_grp_setup].  
- Complete [**"Environment setup"**][env_setup].
- For questions or issues with GLAPI onboarding reach out to [GLAPI Team][GLAPI_support].

[Back to top](#jump-menu)


## Database Onboarding
- Submit a change request to create Liquibase's admin schema in your databases and assign to **DB_SQLServer**. 
  Attach the SQL scripts below to the change request.

  ```sql
  -- Implementation Script
  CREATE SCHEMA lqbase_admin AUTHORIZATION [dbo];
  
  -- Rollback Script
  --DROP SCHEMA lqbase_admin;
  ```

{{% notice style="note" %}}
Since schemas are database objects this needs to be done for each database and also if new databases are added.
{{% /notice %}}

[Back to top](#jump-menu)


## Configure Variable Group
### Variable Group Configuration
1. Click or hover over **“Pipelines”** in ADO.
2. Click on **“Library”**.
3. Click in the **search box** and **type the name of the VG provided to you**.

![LiquibaseVarGrp1-2-3](/images/Liquibase/Liquibase_vg01b.png)

4. Refer to the [**Variable Group Table**](../reference/lqb_44_ado_vgs.html#variable-group-reference) for the values that need to be updated.
5. Add the HashiCorp Vault App Id and Role Id variables.
   - Scroll to the bottom of your VG and click **"+Add"**.
   - In the **"name"** field enter **HVault_App_Id_`<ENVIRONMENT>`** and the corresponding value in the **"value"** field.
   - Replace **`<ENVIRONMENT>`** with the environment that matches your HashiCorp Vault app ID and role ID e.g., for your **TEST** environment the variable names will 
     be **HVault_App_Id_TEST** and **HVault_Role_Id_TEST**.
   - Click the **lock button** to make them secrets.
   - Repeat for the **HVault_Role_Id_`<ENVIRONMENT>`** variables.
   - Repeat for all your database environments e.g., **QA, PROD**  etc.
   - Save your changes.

![LiquibaseVarGrp7-8](/images/Liquibase/Liquibase_vg03b.png)


6. Completed variable group should look similar to like this.

![LiquibaseVarGrp9](/images/Liquibase/Liquibase_vg04.png)


{{% notice style="note" %}}
Click [**Liquibase Azure DevOps (ADO) Pipelines How-Tos**](../how-tos/lqb_21_ht_ado_pipelines.html) for details on how to use Liquibase ADO pipelines.
{{% /notice %}}


[Back to top](#jump-menu)


### Variable Group Reference

[**Variable Group Table**](../reference/lqb_44_ado_vgs.html#variable-group-reference)


[Back to top](#jump-menu)






<!-- ## Configure Pipelines

1. Click on **"Pipelines"** in ADO.
2. Click on **"New pipeline"** on the **"Pipelines"** page.

![LiquibaseVarGrp1-2](/images/Liquibase/Liquibase_pipelines01-02.png)

3. Select **"Azure Repos Git YAML"** on the **"Where is your code?"** page.

![LiquibaseVarGrp3](/images/Liquibase/Liquibase_pipelines03.png)

4. Filter by your repository name and select it on the **"Select a repository"** page.

![LiquibaseVarGrp4](/images/Liquibase/Liquibase_pipelines04.png)

5. Select **"Existing Azure Pipelines YAML file"** on the **"Configure your pipeline"** page.

![LiquibaseVarGrp5](/images/Liquibase/Liquibase_pipelines05.png)

6. Choose your branch from the **"Branch"** dropdown menu.
7. Select the YAML file for the pipeline you're configuring from the **"Path"** dropdown menu.

![LiquibaseVarGrp6-7](/images/Liquibase/Liquibase_pipelines06-07.png)

8. Verify your selections and click **"Continue"**.

![LiquibaseVarGrp8](/images/Liquibase/Liquibase_pipelines08.png)

9.  On the **"Review your pipeline YAML"** page, click the dropdown arrow next to **"Run"** and click **"Save"**.

![LiquibaseVarGrp9](/images/Liquibase/Liquibase_pipelines09.png)

10.  In your new pipeline page, click the menu button and then click **"Rename/move"**.

![LiquibaseVarGrp10](/images/Liquibase/Liquibase_pipelines10.png)

11.  Rename your pipeline and click **"Save"**. It's recommended to use the format below:
     -  `<`Team or Application or Database Name`>`-Liquibase-`<`Liquibase Task Name`>` e.g., DataEng-Liquibase-Update.
     -  Liquibase task name is the last part of the YAML pipeline file name e.g., for **"util-lqb-MSSQL-update"** the task name is **update**.

![LiquibaseVarGrp11](/images/Liquibase/Liquibase_pipelines11.png)

12.  Repeat steps 1 - 11 for each Liquibase pipeline to be configured.

[Back to top](#jump-menu) -->


 <!-- Reference Links -->

[design_liquibase_project]: https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern 

[structure_changelog]: https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft

[vault_intake_form]: https://go/vault-intake

[vault_docs]: https://go/vaultdocs

[go_rfa]: https://rfa.humana.com/RequestForAccess/#!/home/

[go_dba]: http://dbaweb4.humana.com/DBAWeb4

[glapi_chg_template]: https://dev.azure.com/humana/DevOps/_wiki/wikis/DevOps.wiki/3162/How-to-configure-your-classic-release-pipeline-to-run-with-GLAPI-and-ServiceNow

[var_grp_setup]: https://dev.azure.com/humana/DevOps/_git/Glapi.Demo.Integrated.Pipeline?path=/SetupVariableGroup.md&version=GBmaster&_a=preview

[env_setup]: https://dev.azure.com/humana/DevOps/_git/Glapi.Demo.Integrated.Pipeline?path=/SetupEnvironment.md&version=GBmaster&_a=preview


[generic_request]: https://humanaprod.service-now.com/asc?id=sc_cat_item&sys_id=e95a72a51b4b0890bd44744fdc4bcb73&sysparm_category=a855d6171b618c10325621b5ec4bcbe8

[GLAPI_support]: https://teams.microsoft.com/l/channel/19%3aebbb2287d30f4ce9a713f427147120d4%40thread.skype/Greenlight%2520API%2520-%2520Help%252C%2520Support%2520and%2520Issue%2520Reporting?groupId=55a71105-8192-43de-bce7-94820c526085&tenantId=56c62bbe-8598-4b85-9e51-1ca753fa50f2