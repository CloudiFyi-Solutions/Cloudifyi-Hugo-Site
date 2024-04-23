+++
title="GitHub (GH) Workflows"
weight=22
+++

## Jump Menu
- [Prerequisites](#prerequisites)
- [Process Summary](#process-summary)
- [General GitHub Actions Usage](#general-gitHub-actions-usage)
- [How to use Liquibase GH Workflows](#how-to-use-liquibase-gh-workflows)
  - [01 Liquibase Generate Changelog](#01-liquibase-generate-changelog)
  - [02 Liquibase Verify Deployment](#02-liquibase-verify-deployment)
  - [03 Liquibase Deployment](#03-liquibase-deployment)
  - [04 Liquibase Verify Deployment Rollback](#04-liquibase-verify-deployment-rollback)
  - [05 Liquibase Deployment Rollback](#05-liquibase-deployment-rollback)
  - [06 Liquibase Verify Changeset Rollback](#06-liquibase-verify-changeset-rollback)
  - [07 Liquibase Changeset Rollback](#07-liquibase-changeset-rollback)
  - [08 Liquibase Clear Checksums](#08-liquibase-clear-checksums)
- [Repository Variables Reference](#repository-variables-reference)
- [Liquibase Commands Reference](#liquibase-commands-reference)

## Prerequisites
- Review [**Liquibase Concepts**](../explanation/lqb_11_abt_cncpts.html).
- Review [**Liquibase Changelogs and Changesets**](../explanation/lqb_12_abt_chglgs_chgsets.html).
- Review [**Liquibase Quality Checks**](../explanation/lqb_13_abt_qlty_chks.html).
- Review [**Changelogs and Changesets How-Tos**](../how-tos/lqb_20_ht_chglgs_chgsets.html).
- Review [**Quality Checks How-Tos**](../how-tos/lqb_20_ht_qlty_chks.html).
- Define your changelog strategy using [Design Your Liquibase Project][design_liquibase_project] and [How to Structure a Complex Changelog][structure_changelog] as guides.

[Back to top](#jump-menu)


## Process Summary
- Create a feature or environment branch.
- Create changelogs (and changesets).
- Update repository variables.
- Run **`<`DATABASE_PLATFORM`>` 01 Liquibase Generate Changelog** prior to initial deployment to create a snapshot of your database.
- Run **`<`DATABASE_PLATFORM`>` 02 Liquibase Verify Deployment** to verify your deployment.
- Run **`<`DATABASE_PLATFORM`>` 03 Liquibase Deployment** to deploy your changes.
- Run **`<`DATABASE_PLATFORM`>` 04 Liquibase Verify Deployment Rollback** to verify deployment rollback.
- Run **`<`DATABASE_PLATFORM`>` 05 Liquibase Deployment Rollback** to roll back a deployment.
- Run **`<`DATABASE_PLATFORM`>` 06 Liquibase Verify Changeset Rollback** to verify a single changeset rollback.
- Run **`<`DATABASE_PLATFORM`>` 07 Liquibase Changeset Rollback** to roll back a single changeset.
- Run **`<`DATABASE_PLATFORM`>` 08 Liquibase Clear Checksums** to resolve checksum errors.

[Back to top](#jump-menu)


## General GitHub Actions Usage
- Navigate to your repository's **Actions** tab to manually start workflows.
- Click on the appropriate workflow.
- Click **Run workflow**.
- Select your branch from the **Branch:** dropdown.
- Enter/Select appropriate values/options.
- Click **Run workflow**.
- Refresh your browser or wait a few seconds for the workflow run to display.
- Click on the workflow run.
- Click on the workflow run summary.
  
  
![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gh_lqb_wkflw_actions01.png)

![LiquibaseGHActionsTab02](/images/Liquibase/workflows/gen_chglog01.png)

![LiquibaseGHActionsTab03](/images/Liquibase/workflows/gen_chglog02.png)

![LiquibaseGHActionsTab04](/images/Liquibase/workflows/gen_chglog03.png)

<!-- ![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog04.png)

![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog05.png)

![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog06.png) -->

[Back to top](#jump-menu)

## How to use Liquibase GH Workflows

### 01 Liquibase Generate Changelog

Use this workflow to generate a DDL snapshot of database objects. **It doesn't generate DML i.e., no INSERT/UPDATE/DELETE/MERGE statements**. It's recommended to do this prior to your first deployment, you can then execute this as needed. It contains the following tasks:
- **Set Output File Name:** Dynamically generates output file name.
- **Liquibase Generate Changelog:** Generates changelog.
- **Upload Generated Changelog:** Uploads generated changelog file to workflow summary.

1. Click **`<`DATABASE_PLATFORM`>` 01 Liquibase Generate Changelog**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Click on **Summary**.
1. Click on **Snapshots** icon to download the generated changelog locally and store it in a location of your choice.
  
<!-- ![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog01.png)

![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog02.png)

![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog03.png) -->

<!-- ![LiquibaseGHActionsTab01](/images/Liquibase/workflows/gen_chglog04.png) -->

![LiquibaseGenChglog05](/images/Liquibase/workflows/gen_chglog05.png)

![LiquibaseGenChglog06](/images/Liquibase/workflows/gen_chglog06.png)

[Back to top](#jump-menu)


### 02 Liquibase Verify Deployment

Use this workflow to verify database changes without deploying them. It contains the following tasks:
- **Liquibase Validate:** checks changelogs for errors that prevent deployment.
- **Liquibase Status:** Lists all changesets that haven't been applied/deployed, their ids, authors, and file paths.
- **Liquibase Verify Deployment:** Displays the SQL Liquibase will run when it deploys changes.
- **Liquibase Checks:** Executes checks using the checks settings file against a changelog, database, or both.
- **Liquibase History:** Lists all deployed changesets and their deploymentIds.


1. Click **`<`DATABASE_PLATFORM`>` 02 Liquibase Verify Deployment**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Expand **Liquibase Verify Deployment** and review.
  
![LiquibaseVfyDep01](/images/Liquibase/workflows/vfy_dep01.png)

![LiquibaseVfyDep02](/images/Liquibase/workflows/vfy_dep02.png)

[Back to top](#jump-menu)


### 03 Liquibase Deployment

Use this workflow to deploy database changes. It contains the following tasks:
- **Liquibase Validate:** checks changelogs for errors that prevent deployment.
- **Liquibase Status:** Lists all changesets that haven't been applied/deployed, their ids, authors, and file paths.
- **Liquibase Verify Deployment:** Displays the SQL Liquibase will run when it deploys changes.
- **Liquibase Checks:** Executes checks using the checks settings file against a changelog, database, or both.
- **Liquibase Deployment:** Deploys changes.
- **Liquibase History:** Lists all deployed changesets and their deploymentIds.
  

1. Click **`<`DATABASE_PLATFORM`>` 03 Liquibase Deployment**.
2. Click **Run workflow**.
3. Select your branch from the **Branch:** dropdown.
4. Select the target environment from **ENV** the dropdown.
5. Click **Run workflow**.
6. Refresh your browser or wait a few seconds for the workflow run to display.
7. Click on the workflow run.
8. Click on the workflow run summary.
9. Verify all tasks completed successfully.
10. Expand **Liquibase Verify Deployment** and review.
11. Expand **Liquibase History** and review. 
  
![LiquibaseDep01](/images/Liquibase/workflows/deploy01.png)

![LiquibaseDep02](/images/Liquibase/workflows/deploy02.png)

![LiquibaseDep03](/images/Liquibase/workflows/deploy03.png)

[Back to top](#jump-menu)


### 04 Liquibase Verify Deployment Rollback

Use this workflow to verify a deployment rollback without actually rolling back the changes. In the event a deployment rollback is required, use this to test the rollback. It contains the following tasks:
- **Liquibase Validate:** checks changelogs for errors that prevent deployment.
- **Liquibase Verify Deployment Rollback:** Displays the SQL Liquibase will run when it rolls back a deployment.
- **Liquibase Checks:** Executes checks using the checks settings file against a changelog, database, or both.
- **Liquibase History:** Lists all deployed changesets and their deploymentIds.


1. Go to **Liquibase History** task of the deployment you want to roll back. 
1. Note the **Deployment ID**. 
1. Go to the **Settings** tab, expand **Secrets and Variables**, and click **Actions**.
1. Click the **Variables** tab and update the **DEPLOYMENT_ID** repository variable with the noted deployment ID and save your changes.
1. Back at on the **Actions** tab click **`<`DATABASE_PLATFORM`>` 04 Liquibase Verify Deployment Rollback**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Expand **Liquibase Verify Deployment Rollback** and review.
1. Expand **Liquibase History** and review. 
  
![LiquibaseVfyDepRb01](/images/Liquibase/workflows/vfy_dep_rb01b.png)

![LiquibaseVfyDepRb02](/images/Liquibase/workflows/vfy_dep_rb01c.png)

![LiquibaseVfyDepRb03](/images/Liquibase/workflows/vfy_dep_rb01.png)

![LiquibaseVfyDepRb04](/images/Liquibase/workflows/vfy_dep_rb02.png)

[Back to top](#jump-menu)


### 05 Liquibase Deployment Rollback

Use this workflow to roll back a deployment. It contains the following tasks:
- **Liquibase Validate:** checks changelogs for errors that prevent deployment.
- **Liquibase Verify Deployment Rollback:** Displays the SQL Liquibase will run when it rolls back a deployment.
- **Liquibase Checks:** Executes checks using the checks settings file against a changelog, database, or both.
- **Liquibase Deployment Rollback:** Rolls back a deployment.
- **Liquibase History:** Lists all deployed changesets and their deploymentIds.


1. Complete steps **1 - 4** in the previous section to retrieve and update the deployment ID.
1. Click **`<`DATABASE_PLATFORM`>` 05 Liquibase Deployment Rollback**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Expand **Liquibase Deployment Rollback** and review.
1. Expand **Liquibase History** and review. 
  
![LiquibaseRb01](/images/Liquibase/workflows/dep_rb01.png)

![LiquibaseRb02](/images/Liquibase/workflows/dep_rb02.png)

[Back to top](#jump-menu)


### 06 Liquibase Verify Changeset Rollback

Use this workflow to verify a single changeset rollback without actually rolling back the changeset. In the event a single changeset rollback is required, use this to test the rollback. It contains the following tasks:
- **Liquibase Validate:** checks changelogs for errors that prevent deployment.
- **Liquibase Verify Changeset Rollback:** Displays the SQL Liquibase will run when it rolls back a changeset.
- **Liquibase Checks:** Executes checks using the checks settings file against a changelog, database, or both.
- **Liquibase History:** Lists all deployed changesets and their deploymentIds.


1. Retrieve the **changeset author and ID** attribute of the changeset you want to roll back from your changelog. 
1. Go to the **Settings** tab, expand **Secrets and Variables**, and click **Actions**.
1. Click the **Variables** tab and update the **CHANGESET_AUTHOR, CHANGESET_ID, and CHANGESET_PATH** repository variables with the values from step 1.
1. Click **`<`DATABASE_PLATFORM`>` 06 Liquibase Verify Changeset Rollback**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Expand **Liquibase Verify Changeset Rollback** and review.
1. Expand **Liquibase History** and review. 
  
![LiquibaseVfyChgRb01](/images/Liquibase/workflows/vfy_chg_rb01c.png)

![LiquibaseVfyDepRb01](/images/Liquibase/workflows/vfy_dep_rb01b.png)

![LiquibaseVfyChgRb02](/images/Liquibase/workflows/vfy_chg_rb01b.png)

![LiquibaseVfyChgRb03](/images/Liquibase/workflows/vfy_chg_rb01.png)

![LiquibaseVfyChgRb04](/images/Liquibase/workflows/vfy_chg_rb02.png)

[Back to top](#jump-menu)


### 07 Liquibase Changeset Rollback

Use this workflow to roll back a single changeset. It contains the following tasks:
- **Liquibase Validate:** checks changelogs for errors that prevent deployment.
- **Liquibase Verify Changeset Rollback:** Displays the SQL Liquibase will run when it rolls back a changeset.
- **Liquibase Checks:** Executes checks using the checks settings file against a changelog, database, or both.
- **Liquibase Changeset Rollback:** Rolls back a single changeset.
- **Liquibase History:** Lists all deployed changesets and their deploymentIds.


1. Retrieve the **changeset author and ID** attribute of the changeset you want to roll back from your changelog. 
1. Go to the **Settings** tab, expand **Secrets and Variables**, and click **Actions**.
1. Click the **Variables** tab and update the **CHANGESET_AUTHOR, CHANGESET_ID, and CHANGESET_PATH** repository variables with the values from the step 1.
1. Click **`<`DATABASE_PLATFORM`>` 07 Liquibase Changeset Rollback**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Expand **Liquibase Changeset Rollback** and review.
1. Expand **Liquibase History** and review. 
  
![LiquibaseChgRb01](/images/Liquibase/workflows/vfy_chg_rb01c.png)

![LiquibaseDepRb01](/images/Liquibase/workflows/vfy_dep_rb01b.png)

![LiquibaseChgRb02](/images/Liquibase/workflows/vfy_chg_rb01b.png)

![LiquibaseChgRb03](/images/Liquibase/workflows/chg_rb01.png)

![LiquibaseChgRb04](/images/Liquibase/workflows/chg_rb02.png)

[Back to top](#jump-menu)


### 08 Liquibase Clear Checksums

Use this workflow to clear checksums when there's a checksum error. Checksum errors are caused by editing a changelog file that has already been used for a deployment. It contains the following task:
- **Liquibase Clear Checksums:** clears checksums in the Liquibase maintenance table.


1. Click **`<`DATABASE_PLATFORM`>` 08 Liquibase Clear Checksums**.
1. Click **Run workflow**.
1. Select your branch from the **Branch:** dropdown.
1. Select the target environment from **ENV** the dropdown.
1. Click **Run workflow**.
1. Refresh your browser or wait a few seconds for the workflow run to display.
1. Click on the workflow run.
1. Click on the workflow run summary.
1. Verify all tasks completed successfully.
1. Expand **Liquibase Clear Checksums** and review. 
  
![LiquibaseClrChkSum01](/images/Liquibase/workflows/clr_chksums01.png)

![LiquibaseClrChkSum02](/images/Liquibase/workflows/clr_chksums02.png)

[Back to top](#jump-menu)


## Repository Variables Reference

[**Repository Variables Table**](../reference/lqb_45_gh_repo_vars.html#repository-variables-reference)

[Back to top](#jump-menu)


## Liquibase Commands Reference

[**Liquibase Commands Table**](../reference/lqb_43_commands.html#liquibase-commands-reference)

[Back to top](#jump-menu)

 <!-- Reference Links -->

[design_liquibase_project]: https://docs.liquibase.com/start/design-liquibase-project.html#:~:text=Choose%20a%20schema%20design%20pattern 

[structure_changelog]: https://support.liquibase.com/knowledge/how-to-structure-a-complex-changelog-draft

