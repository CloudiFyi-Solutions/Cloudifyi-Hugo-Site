+++
title = "GitHub - Data Platforms Operational Dependency"
weight = 2
+++

## Context and Problem Statement


Many teams using data platforms such as Databricks, Snowflake, and Prefect perform a `git pull` from GitHub at runtime. Many of these flows are Tier 1 applications that rely on GitHub's availability. The need for a reliable operational dependency is crucial. GitHub's Service Level Agreement (SLA) is 99.9%. 

## Decision Drivers

* The need for a reliable operational dependency for data platforms.
* The requirement for a high SLA for recovery during DR or downtime.

## Decision Outcome

The decision to use GitHub as an operational dependency for data platforms was made. This decision is backed by GitHub's SLA of 99.9% and the commitment from the DevOps team.

Data platforms can use GitHub for operational dependency. GitHub's Service Level Agreement (SLA) is 99.9%. The DevOps team will rely on the vendor for recovery during a Disaster Recovery (DR) or downtime. This does not include dependency on infrastructure hosted by the DevOps team such as GitHub Runners. From the perspective of Prefect, Databricks, Snowflake, etc., the dependency is on the GitHub API, not the self-hosted runners. This aligns with the requirement and we have this commitment from the DevOps team.

### Consequences

* This will allow the data platforms to have a reliable operational dependency.
* This will allow the DevOps team to focus on recovery during DR or downtime, without worrying about the infrastructure they host.

### Confirmation

The decision is in Review

### Implementation

The decision to use GitHub as an operational dependency for data platforms was implemented and acknowledged by the DevOps team.