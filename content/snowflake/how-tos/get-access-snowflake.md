+++
title = "Getting Access to Snowflake"
+++

## Overview

The article will guide you through the steps to get access to the correct Snowflake environment.

## Accounts 

### Humana accounts

Request access to the corresponding SSO AD group. Getting access to SSO AD will not give you any roles in Snowflake. You will need to request for roles in Snowflake from the role owners. 

|Account Name     | Account URL | SSO AAD | Status |
|----------------:|:------------|:-------:|:-------|
|Primary(EastUS2) | https://humana-az_snowflake_eastus2.snowflakecomputing.com | AZ_SSO_SAML_Snowflake| Active |
|Secondary(Central) | https://humana-az_snowflake_central.snowflakecomputing.com | AZ_SSO_SAML_Snowflake | Inactive |
|Sandbox | https://humana-az_snowflake_eastus2_sbx.snowflakecomputing.com|AZ_SSO_SAML_Snowflake_sbx| Active |
|Centerwell(EastUS2) | https://humana-az_snowflake_centerwell_eastus2.snowflakecomputing.com|AZ_SSO_SAML_SNOWFLAKE_CENTERWELL_PROD| Active |


> Sandbox is restricted to admin functions at this time. 

## Roles

Single Sign-On (SSO) is the authentication method used to access Snowflake. It is required to access snowflake but will not give you any roles in Snowflake. 

To get roles added reach out to Data Platform Engineering team. 
