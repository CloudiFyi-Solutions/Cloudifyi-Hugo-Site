+++
title = "Centralize Knowledgebase"
weight = 1
+++

## Context and Problem Statement

Knowledge documentation is spread across service-now, sharepoint, Microsoft Work Docs, Azure DevOps, and other tools. This makes it difficult to find the right information at the right time.

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Accessibility - Searching for documents should be simple and easy.
* Governed and Reviewed - Documents should be reviewed and approved by the right people.
* Standardize Documentation - Documents should be in a standard consisten format.

## Decision Outcome

**Documentation as Code**

Documents should be written in Markdown and committed to [Data Platform Engineering](https://github.com/Cloud-3-0-EMU/Data-Platform-Engineering-Docs) GitHub repo.

Markdown is a lightweight markup language with plain text formatting syntax. This will allow our team to rapidly create and maintain documentation at scale.

Github will allow us to create a pull request and review process for all documents. This will allow us to ensure that documents are reviewed and approved by the right people.

Hugo will allow us to create a static site that can be hosted on any platform. This will allow us to create a knowledge base that is easy to search and adds a presentation layer to the documentation.

### Consequences

* This will allow engineers/architects to create a knowledge base that is easy to search, review, and maintain. 
* Because its markdown, there is no complex tooling required to create and maintain the knowledge base. 

### Data Time Travel

#### Snowflake
Decision has been made Snowflake will support time travel of <b>30 days</b>

#### Databricks
Decision has been made Databricks will support time travel of <b>30 days</b>

