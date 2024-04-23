+++
title="Liquibase Azure DevOps Pipelines and GitHub Workflows"
weight=14
+++

## Jump Menu
- [Liquibase ADO Pipelines and GH Workflows](#liquibase-ado-pipelines-and-gh-workflows)
  - [Process Flow](#process-flow)
  - [ADO Pipelines Reference](#liquibase-ado-pipelines-reference)
  - [GH Workflows Reference](#liquibase-gh-workflows-reference)


## Process Flow
![LiquibaseProcessFlow](/images/Liquibase/Liquibase_process_flow.jpg)

The above summarizes the process flow:
1. Application team creates changeset(s).
   - Optionally generate changelog is run to take a DDL snapshot of the schema.
2. Changsets are verified.
   - If there are failures return to step 1.
3. GLAPI certifies the build.
   - If there are failures return to step 1.
4. Changesets are deployed to database.
   - If there are failures return to step 1.
5. Changes are validated in the database.

If a rollback is required:
1. Roll back is verified.
   - If there are failures return to step 1.
2. GLAPI certifies the build.
   - If there are failures return to step 1.
3. Changes are rolled back.
   - If there are failures return to step 1.
4. Changes are validated in the database.

# Liquibase ADO Pipelines and GH Workflows

Instead of having to memorize Liquibase commands, their various arguments and options, we have configured these commands in ADO pipelines and GH workflows using Liquibase Flows and provided variables as a means to pass values to the necessary arguments and options. This provides teams with automation capabilities, simplifies use of Liquibase and minimizes errors at run time. As part of Liquibase onboarding, teams will be provided with the components needed to run Liquibase.

### ADO Pipelines Reference

[**ADO Pipelines Table**](../reference/lqb_44_ado_pipelines.html#ado-pipelines-reference)

{{% notice style="note" %}}
Click to return to:
- [**Liquibase Azure DevOps (ADO) Pipelines**](../how-tos/lqb_22_ht_ado_pipelines.html)
- [**On-Prem MSSQL Onboarding**](../how-tos/lqb_21_ht_mssql_onbrding.html)
{{% /notice %}}

[Back to top](#jump-menu)


### GH Workflows Reference

[**GH Workflows Table**](../reference/lqb_45_gh_workflows.html#gh-workflows-reference)

{{% notice style="note" %}}
Click to return to:
- [**Liquibase GitHub (GH) Workflows**](../how-tos/lqb_21_ht_gh_workflows.html)
- [**Azure PostgreSQL Onboarding**](../how-tos/lqb_21_ht_pgsql_onbrding.html)
{{% /notice %}}

[Back to top](#jump-menu)

