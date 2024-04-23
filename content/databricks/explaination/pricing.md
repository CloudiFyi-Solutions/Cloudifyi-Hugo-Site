+++
title = "Pricing, Chargeback, and Billing"
+++


## Cost Estimation

Databricks usage cost estimating requires a lot of parameters. While its difficult to provide a generic formula, here are some of the factors that you need to consider when estimating the cost of a data product.

At a high level, we need to consider:

1.	Storage
2.	Compute
3.	Ingress/Egress

### Storage

There are various types of storage that you may need to consider.

**Unity Catalog Managed Tables** are stored in the Enterprise Datalake. The cost of storage is based on the volume of data stored in the datalake. In cloud 3.0 we do not yet have a chargeback for the Enterprise Datalake but you can equate the cost of your data usage to  ADLS Gen 2 ZRS pricing.

**External Tables** are the storage accounts that host external tables. In most cases, this is a storage account that you would own and manage in your application tenant.

**Data Landing zone** are stoaage accounts that are used for landing files from on-prem and other sources. In most cases, this is a storage account that you would own and manage in your application tenant.


### Compute
For compute, there are 4 components, 
•	Databricks Runtime (DBR) 
•	Azure VMs that Databricks spins up
•	Orchestration Compute (Prefect/Databricks Workflow)
•	Prefect Licensing itself

#### Databricks Runtime (DBR) 
This is the engine that runs Databricks computes, and its charged by usage. A Databricks Unit (DBU) is a normalized unit of processing power on the Databricks  Platform used for measurement and pricing purposes. The number of DBUs a workload consumes is driven by processing metrics, which may include the compute resources used and the amount of data processed.

[ Refer to the link for more details on DBU pricing ](https://azure.microsoft.com/en-us/pricing/details/databricks/)

#### Azure VMs 
Databricks spins up Azure VMs to run the DBR. The cost of these VMs are based on the VM type and the number of VMs. 

[ Refer to the link for more details on Azure VM pricing ](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/)

#### Orchestration Compute

If you are using Prefect, the cost of the orchestration compute is based on the number of Prefect workers running on  your AKS cluster. Work with the Ascent/Containers team to get the cost of the AKS cluster usage.

#### Prefect User based Licensing

Currently we have 150 seats for Prefect. Exceeding that will require additional licensing for which we do not have a cost estimate yet.

### Ingress/Egress

Cost of networking includes amount of data transferred thru our humana network, Private Endpoints, and Express Route.


## Chargeback

We  currently do not charge back for databricks due to an open item with financial tagging. We are working on a solution to chargeback for databricks usage.