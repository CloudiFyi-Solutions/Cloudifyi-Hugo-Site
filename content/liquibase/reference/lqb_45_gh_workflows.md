+++
title="GitHub Workflows"
weight=45
+++

### GH Workflows Reference

The table below summarizes the currently defined in our GH workflows which will be included with your Liquibase repository. The **Liquibase Commands Used** column lists the commands run and the **order** in which they are run.

<style>
table th:first-of-type {
    width: 55%;
}
table th:nth-of-type(2) {
    width: 15%;
}
table th:nth-of-type(3) {
    width: 15%;
}
</style>

| **Name**  | **Description**   | **Liquibase Commands Used**   |
|  ---   |  ---   |  ---   |
| `util-lqb-`<`database_platform`>`-01-gen-changelog.yml` | Used to generate changelogs from the existing database. **Run this before your first Liquibase deployment. Then as needed.** | generate-changelog |
| `util-lqb-`<`database_platform`>`-02-vfy-deployment.yml` | Used to verify your database changes prior to deployment. It does NOT deploy changes to the database. **Run this to test your changes.** | validate, status, update-sql, checks run, history |
| `util-lqb-`<`database_platform`>`-03-deployment.yml` | Used to deploy your database changes. | validate, status, update-sql,checks run, update, history  |
| `util-lqb-`<`database_platform`>`-04-vfy-deploy-rollback.yml` | Used to verify your deployment rollback. **It does NOT roll back the deployment.** To identify the deployment ID review the output of the **"Liquibase History"** task. **Run this to test a deployment rollback prior to rollback.** | validate, rollback-one-changeset-sql, checks run, history  |
| `util-lqb-`<`database_platform`>`-05-deployment-rollback.yml` | Used to rollback a deployment (a group of changesets that were run together). | validate, rollback-one-update-sql, checks run,  rollback-one-update, history |
| `util-lqb-`<`database_platform`>`-06-vfy-changeset-rollback.yml` | Used to verify a single changeset rollback. **It does NOT roll back the changeset.** | validate, rollback-one-changeset-sql, checks run, history |
| `util-lqb-`<`database_platform`>`-07-changset-rollback.yml`   |  Used to rollback a single changeset. | validate, rollback-one-changeset-sql,checks run, rollback-one-changeset, history |
| `util-lqb-`<`database_platform`>`-08-clearChecksums.yml` | Used to reset the checksums when there's a checksum validation error. | clear-checksums |

{{% notice style="note" %}}
Click to return to:
- [**Liquibase GitHub (GH) Workflows**](../how-tos/lqb_21_ht_gh_workflows.html)
- [**Azure PostgreSQL Onboarding**](../how-tos/lqb_21_ht_pgsql_onbrding.html)
- [**Liquibase Commands Reference**](#liquibase-commands-reference)
{{% /notice %}}

[Back to top](#gh-workflows-reference)

