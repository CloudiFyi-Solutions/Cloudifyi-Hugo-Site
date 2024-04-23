+++
title = "Service Account Onboarding"
+++

## How to get started?

Download a request form 
  
<b>You can grab a request form [here](snowflake_files/Snowflake_ServiceAccount_Onboarding_Form.docx) </b></br>


- Follow the example below and fill out your request form.
-  Create a go/gen ticket
-  Attach the completed onboarding form to the ticket
-  Assign to DB_Snowflake_Eng group.

*If you are providing the RSA PEM, please attach the public key(s) as part of your request and specify the name of the pem to be attached to the Service Account* 

### Snowflake Service Account Onboarding

|Organizational Item|Description|
|-|-|
|Organization| <Your_Organization> |
|Cost Center| <Your_Cost_Center> |

#### Service Account

repeat for as many service account as you need. <br>

|Desired Service Account Attribute| Service Account Characteristic|
|-|-|
|environment|dev|
|service account name|sa_test_super_user|
|service account snowflake roles|AZ_SNOWFLAKE_TEST_ADMIN,AZ_SNOWFLAKE_TEST2_ADMIN|
|default role|AZ_SNOWFLAKE_TEST_ADMIN|
|default warehouse|TEST_WH|
|public key| either *PROVISION FOR ME* or *I WILL PROVIDE RSA PEM*|
|Optional: Name of pem key| Provide name of the Pem to be used for this service account|




