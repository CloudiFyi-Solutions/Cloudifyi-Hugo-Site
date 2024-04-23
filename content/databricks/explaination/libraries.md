+++
title = "Using Libraries in Databricks"
+++


## Overview

This document explains what are the different ways to use/install Java and Maven libraries in Databricks. In general, use the latest Databricks Runtime and use Volumes to install libraries. If you are using an older Databricks Runtime, you can use the other methods described in this document.


| |	Single User |	Shared Access |	No Isolation |
|--|--|--|--|
| **Workspace Fils/DPFS** |	depreciated |	depreciated |	depreciated |
| **Cloud Storage** |	Supported |	Supported |	Supported |
|Volumes|	13.3+ |	13.3+|	Not supported|

Refer to the official documentation for more details: [https://learn.microsoft.com/en-us/azure/databricks/compute/compatibility](https://learn.microsoft.com/en-us/azure/databricks/compute/compatibility)

## Cloud Storage
If you are using an older databricks runtime, create an Azure Blob Storage and Upload your libraries there.
The following guide explains how to do this: [Connect to Azure Data Lake Storage Gen2 and Blob Storage](https://learn.microsoft.com/en-us/azure/databricks/connect/storage/azure-storage)

## Volume

If you are using Databricks 13.3+ you can use Volumes to install libraries. Please reach out to get your volumes created.

## Python Libraries

Use Jfrog artifactory to install python libraries. If you are using one of the cluster policies created by the platform team, you should be able to install libraries without additional configuration. If you are using a custom cluster policy, you have to do additional steps to set up your jfrog user, token, repository before you can do a pip install.

