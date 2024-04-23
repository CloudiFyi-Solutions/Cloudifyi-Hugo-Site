+++
title="Platform Architecture"
weight=10
+++

## Jump Menu
- [Design Overview](#design-overview)
- [Components](#components)
- [Process Workflow](#process-workflow)

## Design Overview

<!-- <p align="center">
  <img src="/images/Liquibase/Liquibase_architecture.png" alt="drawing" width="900"/>
</p> -->

![LiquibaseArchitecture](/images/Liquibase/Liquibase_architecture.png)

At Humana the Liquibase Pro platform is implemented using CI/CD principles to automate database schema changes while enforcing governance and security standards. 

**CI/CD:**
- Users maintain their changelogs in a Git repository.
- A containerized Liquibase image is initialized when Liquibase tasks are run and discarded at the end of the run. 

**Governance:**
- Liquibase quality checks are run against users' changelogs to enforce Humana database standards.
- GLAPI checks are run against the pipeline to enforce Humana operational standards and automates change order creation if the pipeline is level 3 certified.
  
**Security:**
- HashiCorp Vault retrieves an ephemeral credential for authenticating to the database at runtime and discards the credential upon completion of the pipeline or on failure.

[Back to top](#jump-menu)

## Components

<!-- <p align="center">
  <img src="/images/Liquibase/Liquibase_components.png" alt="drawing" width="900"/>
</p> -->

![LiquibaseComponents](/images/Liquibase/Liquibase_components.png)

- **Official Liquibase Docker image that is configured for and stored in Humana’s instance of Artifactory:** This standardizes the Liquibase configuration for all end users as all necessary config files, drivers are included in the image. The image is initialized in the CI/CD pipeline.
- **Liquibase Credentials & Secrets:** These will be vaulted to meet Humana’s security standards using HashiCorp Vault.
- **Liquibase Changelogs:** This is stored in version control, Azure DevOps or GitHub, and supports JSON, SQL, XML, and YAML formats. We’ll be using SQL format for RDBMS and JSON format for NoSQL databases, while the root changelogs will remain in the default XML format.
- **Liquibase Flow Files:** This pro feature enables us to simplify the use of Liquibase commands for teams. They allow us to create a predefined Liquibase workflow that is standard across Humana’s landscape which cover most use cases while also allowing for ad-hoc use cases. These are stored in version control.
- **Azure DevOps Pipeline Templates:** Liquibase pipelines are pre-configured for end users using Azure YAML pipeline templates. This eases adoption and simplifies administration as end users don't have to worry about managing the pipeline configuration. After onboarding, teams' repositories will contain multiple Liquibase YAML pipeline files which represent the various Liquibase workflows.


[Back to top](#jump-menu)

## Process Workflow

<!-- <p align="center">
  <img src="images/Liquibase/Liquibase_user_workflow.jpg" alt="drawing" width="900"/>
</p> -->

![LiquibaseWorkflow](/images/Liquibase/Liquibase_user_workflow.jpg)

1. Dev commits database schema changes to their changelogs in their repository.
2. Liquibase pipeline is triggered (manually or via CD).
3. Liquibase validate command runs to validate changelogs for errors.
   - If validation is successful go to step 4.
   - If validation fails, dev reviews/fixes error(s) and returns to step 1.
4. Liquibase Quality Checks run to enforce database standards.
   - If checks are successful go to step 5.
   - If checks fail, dev reviews/fixes error(s) and returns to step 1.
5. GLAPI is triggered to enforce HUMANA pipeline standards.
   - If GLAPI checks are successful go to step 6.
   - If GLAPI checks fail, dev reviews/fixes error(s) and returns to step 1.
   - Manual validation is required prior to database deployment.
6. Liquibase update runs to apply changes to database.

[Back to top](#jump-menu)