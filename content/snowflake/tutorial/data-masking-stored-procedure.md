+++
title = "Data-Masking Stored Procedures"
+++

## How to get started?
  
<b>Request access to TF_DATA_PLATFORM.DB_OWNER_UTILS schema</b></br>


### Function Definition

This is the store procedure's functional definition: </br>

```
function_name = "APPLY_DYNAMIC_MASKING_POLICY"
language = "JAVASCRIPT"
arguments {
    name = "table_name"
    description = "fully qualified table name (please include schema here)"
    example = "TEST_DATA_SCHEMA.TEST_TABLE"
}
arguments {
    name = "column_names"
    description = "comma separate columns to apply masking policy to within the table"
    example = "TEST_COL_A,TEST_COL_B"
}
arguments {
    name = "role_names"
    description = "comma separate azure functional roles that can view the table column's data"
    example = "AZ_SNOWFLAKE_TEST_ADMIN_DEV, AZ_SNOWFLAKE_TEST_FINANCE_DEV"
}
arguments {
    name = "custom masking strategy to apply to the column"
    description = "custom mask to be applied"
    example = "XXXXX"   #this would apply 'XXXXX' mask to the column
}
```

### Example Usage

```CALL TF_DATA_PLATFORM.DB_OWNER_UTILS.APPLY_DYNAMIC_MASKING_POLICY('TEST_SCHEMA.TEST_TABLE','TEST_STRING','SYSADMIN,TEST','ABCD');```
Apply on TEST_SCHEMA.TEST_TABLE's TEST_STRING column a String mask 'ABCD', so that only SYSADMIN and TEST role can see the real string data

```CALL TF_DATA_PLATFORM.DB_OWNER_UTILS.APPLY_DYNAMIC_MASKING_POLICY('TEST_SCHEMA.TEST_TABLE','TEST_INT,TEST_DOUBLE','SYSADMIN,TEST','1111');```
Apply on TEST_SCHEMA.TEST_TABLE's TEST_INT and TEST_DOUBLE columns a mask '1111', so that only SYSADMIN and TEST role can see the real integer data

```CALL TF_DATA_PLATFORM.DB_OWNER_UTILS.APPLY_DYNAMIC_MASKING_POLICY('TEST_SCHEMA.TEST_TABLE','TEST_DATE','SYSADMIN,TEST','1929-01-01');```
Apply on TEST_SCHEMA.TEST_TABLE's TEST_DATE column a mask '1929-01-01', so that only SYSADMIN and TEST role can see the real date data

### Dropping Masking Policy

```ALTER TABLE TEST_SCHEMA.TEST_TABLE MODIFY COLUMN TEST_STRING UNSET MASKING POLICY;```</br>
Drop Masking Policy from 'TEST_SCHEMA.TEST_TABLE' 'TEST_STRING' column
