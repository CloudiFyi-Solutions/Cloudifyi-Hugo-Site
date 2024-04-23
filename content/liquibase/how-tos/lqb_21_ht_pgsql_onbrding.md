+++
title="Azure PostgreSQL Onboarding"
weight=21
+++

## Jump Menu
- [Quickstart](#quickstart)
- [Prerequisites](#prerequisites)
- [Liquibase Onboarding](#liquibase-onboarding)
- [Database Onboarding](#database-onboarding)
- [Configure Repository Variables](#configure-repository-variables)
  - [Repository Variables Configuration](#repository-variables-configuration)
  - [Repository Variables Reference](#repository-variables-reference)

## Quickstart
1. Complete Prerequisites.
1. Complete Onboarding steps.
1. Configure your Liquibase repository variables.

[Back to top](#jump-menu)


## Prerequisites
- Teams must already be onboarded to GitHub (GH).
- Teams must know how to work with repositories in GH.
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
  Liquibase Pro Onboarding for Azure PostgreSQL
  ```
- In the **Summary of Issue** field copy & paste the text below. Replace the text in `<` `>` with the appropriate values.
  ```
  Liquibase Pro Onboarding Request for Azure PostgreSQL - <Application Name> - <Team Name>
  ```
- In the **Description of request** field copy & paste the text below. Replace the text in `<` `>` with the appropriate values.
  ```
  LOB - <Your Line of Business>
  Application Name - <Your application name>
  Team Name - <Your team name>
  Requester - <Requester first & last name>
  Email: <Requester email address>

  Environment: Cloud 3.0
  Database Platform: Azure Database for PostgreSQL
  Repository Platform: GitHub
  GitHub Organization - <Your GitHub Org Name>
  GitHub Team Name - <Your GitHub Team Name>

  Environment/Server Name/Database Name:
  <Environment>/<Host FQDN>/<Database Name>
  ```
- See example below.

![LiquibaseGenericRequest1](/images/Liquibase/pgsql/pg_lqb_gen_req01.png)

- The following GH components will be created for you: 
  - repository
  - GH workflows
- Modify the changelog directory based on the strategy chosen.
- Configure the repository variables following steps in [**Configure Repository Variables**](#configure-repository-variables) section.

[Back to top](#jump-menu)


<!-- ## GLAPI Onboarding
- Complete **ONLY** the [**"Obtaining a change template"**][glapi_chg_template] section.
- Complete [**"Variable group setup"**][var_grp_setup].  
- Complete [**"Environment setup"**][env_setup].
- For questions or issues with GLAPI onboarding reach out to [GLAPI Team][GLAPI_support].

[Back to top](#jump-menu) -->


## Database Onboarding
- Submit a change request to create Liquibase's admin schema in your databases and assign to **DB_Azure_Eng**. 
  Attach the SQL scripts below to the change request.

  ```sql
  -- Implementation Script
  CREATE USER ${LQB_USER} WITH LOGIN PASSWORD '${PASSWD}' NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION VALID UNTIL 'infinity'; GRANT azure_pg_admin TO ${LQB_USER};

  CREATE SCHEMA IF NOT EXISTS ${SCHEMA_NAME}; COMMENT ON SCHEMA ${SCHEMA_NAME} IS 'Liquibase DB Changelog Maintenance Tables Schema'; GRANT ALL ON SCHEMA ${SCHEMA_NAME} TO ${LQB_USER};
  
  -- Rollback Script
  --DROP SCHEMA ${SCHEMA_NAME};
  --DROP USER ${LQB_USER};
  ```

{{% notice style="note" %}}
Since schemas are database objects this needs to be done for each database and also if new databases are added.
{{% /notice %}}

[Back to top](#jump-menu)


## Configure Repository Variables
### Repository Variables Configuration
1. Click **Settings** in GH repository menu.
2. Click on **Secrets and variables** and then **Actions**.
3. Click the edit icon next to the variable you want to update.

![LiquibaseRepoVar1-2-3](/images/Liquibase/pgsql/pg_lqb_upd_var01.png)

4. Refer to the [**Repository Variables Table**](../reference/lqb_45_gh_repo_vars.html#repository-variables-reference) for the values that need to be updated.
5. Update the value as needed and click **Update variable**.

![LiquibaseRepoVar4-5](/images/Liquibase/pgsql/pg_lqb_upd_var02.png)


6. Completed variable group should look similar to like this.

![LiquibaseRepoVarGrp6](/images/Liquibase/pgsql/pg_lqb_repo_vars01.png)

[Back to top](#jump-menu)


{{% notice style="note" %}}
Click [**Liquibase GitHub (GH) Workflows How-Tos**](../how-tos/lqb_21_ht_gh_workflows.html) for details on how to use Liquibase GH workflows.
{{% /notice %}}


### Repository Variables Reference

[**Repository Variables Table**](../reference/lqb_45_gh_repo_vars.html#repository-variables-reference)

[Back to top](#jump-menu)

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