+++
title="About Liquibase Pro"
weight=1
+++

## Index

{{% children sort="weight" %}}

## Liquibase Pro Overview

Liquibase Pro is a licensed platform-agnostic database schema management solution that enables users to automate, revise and release database changes faster and safer from development to production.


Humana's implementation of Liquibase leverages a containerized version of Liquibase Pro in Azure DevOps pipelines or GitHub workflows for automating database schema changes across Humana’s cloud and on-prem footprint transactional RDBMS and NoSQL databases while integrating with GLAPI to certify the pipeline for automated change approval. 

## Why Liquibase Pro

- **Platform agnostic:** Liquibase supports the RDBMS and NoSQL databases Humana uses in our cloud and on-prem environments.
- **Process standardization:** The same pattern will be used across our approved RDBMS and NoSQL databases in our cloud and on-prem environments.
- **Automation:** Liquibase integrates with Humana’s existing CI/CD tools i.e., Azure DevOps (ADO), GitHub.
- **Licensed:** Liquibase Pro is a licensed version of Liquibase that provides us the following features.
- **Database Inspection features:** generate a baseline of current state of database, compare databases.
- **Selectively deploy changes:** Deploy all or select changes based on defined criteria.
- **Targeted rollbacks:** Undo all or specific database schema changes.
- **Automated Governance:** Liquibase Pro’s Quality Checks feature allows us to enforce database security standards in an automated way.
- **GLAPI integration:** Since Liquibase will be leveraged in our CI/CD pipelines, GLAPI will be used to certify the pipelines.

[Back to top](#index)
