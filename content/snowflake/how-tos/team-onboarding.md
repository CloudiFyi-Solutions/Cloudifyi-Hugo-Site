+++
title = "Team Onboarding"
+++

## How to get started?

### Discover Your Domain
As part of cloud 3.0, we want to align to the Northstar Domain Architecture. You can find a reference of the document [here](snowflake_files/NS_Domain-to-Data_Sub-Domain-Mapping.pdf)

Each Domain will have a standarized set of environments that goes along with it. You should conform to the standard of the domain.

Reach out to pmolunguri@humana.com, nleach@humana.com, srajadurai@humana.com, fcao1@humana.com to get you started on your domain discovery journey.

### Provision Your Snowflake Assets

Download request forms.  
  
<b>You can grab a [Schema Onboarding](snowflake_files/Snowflake_Schemas_Onboarding_Form.docx) </b></br>
<b>You can grab a [Warehouse Onboarding](snowflake_files/Snowflake_Warehouse_Onboarding_Form_V1.docx) </b></br>
<b>You can grab a [Service Account Onboarding](snowflake_files/Snowflake_ServiceAccount_Onboarding_Form.docx) </b></br>

- Follow the example below and fill out your request form.
-  Create a go/gen ticket
-  Attach the completed onboarding form to the ticket
-  Assign to DB_Snowflake_Eng group.


### Tenant Onboarding Form (Example)

|Organizational Item|Description|
|-|-|
|Domain| Please reference this to identify the Northstar Domain your app belongs to: [Snowflake Domains :: Data Platform Engineering (appserviceenvironment.net)](https://dataplatform-docs.az3-cfes-eastus2-npe-asev3.appserviceenvironment.net/snowflake/references/snowflake_domains.html) For additional question, or need help with domain discovery, feel free to reach out to us for support|
|Appliation ID| Humana-application-id: (APPSVC ID) |
|Environments|<NPE,PRD,UAT,ETC>|
|Application Owner|Application Owner Full Name|
|AZ Group Approver (Email Address)|<nleach@humana.com>|
|Support Group|Support Group Name|



#### Schemas (Example)

repeat for as many schemas as you need

|Desired Schema Name: (i.e. test_schema)| AZ Groups (list of az groups per role)|
|-|-|
|Schema Owner|az_snowflake_test_admin,az_snowflake_test_owner|
|Developer/Contributor|az_snowflake_test_developers|
|RW|az_snowflake_test_analysts|
|RO|az_snowflake_test_guests|

### Foot Notes

- OWNER has ALL privileges on the schema
- CONTRIBUTOR has ALL privileges on the schema, with the exception of OWNERSHIP. Full list of privileges that come with "ALL" is here: https://docs.snowflake.com/en/user-guide/security-access-control-privileges#schema-privileges
- RW is granted ALL privileges only on certain types of schema objects (details are on that same page under the specific object type), which also comes with everything except OWNERSHIP on those. Pradeep Molunguri can pull out the list of these privileges on a sample schema by executing the below:
show future grants to role _CLAIMS_DEV_DAW_CORE_PRODUCT_SCH_RW_ROLE;
OWNERSHIP is the privilege required to modify or drop objects, so for example, the RW role can INSERT, UPDATE, DELETE from, or TRUNCATE a table, but cannot modify its definition. Think of RW as "everything but DDL".
- RO has VIEW Only Access to the data objects created for the schema.

