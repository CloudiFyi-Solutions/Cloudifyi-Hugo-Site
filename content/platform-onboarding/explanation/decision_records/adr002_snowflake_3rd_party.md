+++
title = "3rd Party Packages for Snowflake"
weight = 2
+++

## Context and Problem Statement

Snowflake does not support private repositories such as JFROG. However Humana's security policy requires that all packages be scanned for vulnerabilities via JFROG.

The solution is to have legal review and accept the agreement of using 3rd party packages via Anaconda.

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Multiple teams will be using Snowflake and will need to install 3rd party packages for their development.

## Decision Outcome

A case was opened with humana procrument and legal to review the agreement and accept the terms of using 3rd party packages via Anaconda.

Reference:
Case #00547584 - Snowflake 3rd Pary Library Onboarding

### Consequences

* This will allow administrators to enable anaconda repos. 
* This will allow engineers/architects to leverage 3rd party packages for their development.
 
<!-- This is an optional element. Feel free to remove. -->

### Confirmation

ADR is in Review

### Implmentation

Anaconda Python packages were accepted and acknowledged on Oct 18, 2023 by SRAJADURAI
