+++
title = "Functional Requirements"
+++

## Index

{{% children sort="weight" %}}


## Cloud 3.0 Guiding Principals

Our Cloud 3.0 strategy is governed by a set of guiding principles. These principles are supported by a deliberate operating model based on themes of transformation, governance and engineering outlined here: (Humana Guiding Principals)</br>

**Well-architected (WA)** | Scalability, performance, resiliency, fault tolerance, operational excellence and cost effectiveness</br>

**Automation first (AF)** | On-demand rapid and automated provisioning</br>

**Simple and secure (S&S)** | Clearly defined, communicated, implemented and monitored security guidelines</br>

**Cloud agnostic (CA)** | Agility to avoid one-vendor lock-ins and support multi-cloud capabilities</br>https://github.com/Cloud-3-0-EMU/Data-Platform-Engineering-Docs/pull/11

**Superior customer experience (SCE)** | Architecture centered around all stakeholders from end user to developers</br>

**Modularity (MOD)** | Modular components with independent deployment and self-testability</br>

**Loosely coupled (LoCo)** | Service communication without dependency on platform or infrastructure</br>

**Ease of integrations (EoI)** | Plug-and-play architecture</br>



## Cloud 3.0 Platform Onboarding Goal

Provide a unified, automated and secure Cloud Solution Platform onboarding strategy in Humana Cloud 3.0 environment that aligns with the technical guiding principals.

## Cloud 3.0 Platform Onboarding Functional Requirements
|  | **Requirement Name** | **Description** | **Comments** | **Cloud 3.0 Principal(s) Alignment** |
|----------|----------------------|-----------------|--------------|--------------------------------------|
|1.0| Vendor-Agnostic/Open Standards Architecture and Onboarding Process| The onboarded cloud solution platform core competencies should support integration with various CSP (AWS,GCP AZURE) without platform-specific restrictions or configurations. </br></br>Not Applicable if the platform is vendor hosted |The process at which we onboard the cloud solution provider should be the same across the three CSPs with minimal modifications.|CA|
|1.1| Onboarding Documentation |The onboarded solution platform shall provide a clear and comprehensive documentation of the onboarding process so that it is repeatable and reproducable. </br></br>Not applicable if the platform is vendor hosted||CA</br>SCE|
|1.2| CSP Specific Limitations/Non-standard Capabilities Documentation | Any CSP specific limitations or any non standard capabilities that is unique to each CPS shall be documented. </br></br>These process will not be considered part of the platform onboarding process</br></br>Not applicable if the platform is vendor hosted||CA</br>SCE|
</br>
|2.0|Automated Provisioning of Cloud Platform Infrastructure |Deployment of the onboarded cloud platform supporting infrastructures shall be automated through programmatic means.|Infrastructure as code should be the recommended approach|AF|
|2.1|Cloud Agnostic Automated Provisioning Capability|The tools which are used to automate infrastructure provisioning must be cloud agnostic and portable across different CSPs||AF|
|2.2|Provision Scripting Version Control|Automation changes must be tracked and versioned for traceability and accountability||AF|
</br>
|3.0|Secure Data Isolation |Cloud platform support logical separation of data.||S&S|
|3.1|Data Entitlement|Cloud platform must have an entitlement layer that only the authorized users with the correct privilege may access the data||S&S|
|3.2|Data At Rest Security|Data in cloud platform must provide capability to encrypt at rest with industry standard algorithms|At Humana, we use customer managed keys.|S&S|
|3.3|Data in Transit Security|All data in transit should be secured via SSL/TLS or other suitable encryption techniques.||S&S|
|3.4|Secrets Storage|All sensitive information such as passwords or API keys should be securely stored using a secrets management solution|At Humana, we use HashiCorp Vault.|S&S|
</br>
|4.0|Secure Network Isolation| Each platform environment should be isolated with dedicated VPCs or equivalent network structures.||S&S|
|4.1|Network Monitoring| Network traffic of the onboarded platform should be monitored and controlled via firewalls. It should include intrusion detection systems, and similar measures.||S&S|
</br>
|5.0|Integrated IAM Model|Onboarded cloud platform must have an Identity and Access Management model that aligns with Humana Corporate Role Based Access structure||S&S|
|5.1|Least Privilege IAM|Onboarded cloud platform should support the principal of least privilege as part of its tenant onboarding||S&S|
</br>
|6.0|Scalable Integration|The onboarded cloud platform must enable scaling of the service to support large enterprise level business units (horizontally and vertically)||WA</br>MOD</br>LoCo|
|6.1|Elastic Resource Provisioning|The onboarded cloud platform should monitor resource utilization and automatically scale up or down based on the demand.and provide the capabilities to scale up or down based on thresholds/configurations set by Humana to meet business needs||WA</br>MOD</br>LoCo|
</br>
|7.0|Adaptive Tenancy Models|The onboarded cloud platform must have a clearly identified definition of tenant, and the tenancy model must aligns with "3.0-Secure Data Isolation", "4.0 Secure Network Isolation" and “6.0-Scalable Integration”|The cloud platform should support both single-tenant and multi-tenant architectures.|WA|
|7.1|Tenant Specific Configurations|The onboarded cloud platform should allow tenant-specific customizations without affecting overall performance and scalability.||WA</br>MOD|
</br>
|8.0|Loose Coupling Of Support Functionalities| The onboarded cloud platform must have clearly defined integration end points for platform agnostic support functionalities</br></br>Any control plane API or data plane APIs provided by the Cloud Platform shall be documented as reference material|I.e. kafka connection, PowerBI connector, etc|EoI|
</br>
|9.0|Resource Allocation|The onboarded cloud platform must have a clearly defined resource metering capability, such as tagging of resources. So that storage, compute and network transfer usage associated with the platform is well captured and provides ease of allocation||SCE|
|9.1|Cost Reporting|The onboarded cloud platform should have a periodic cost reporting mechanism|Cost reporting should be well documented.</br></br>And, if applicable, enabled as part of the onboarding process|SCE|
|9.2|Resource Monitoring|The onboarded cloud platform should have a way to continuously monitor its usage by tenant|The resource monitoring capability should be well documented.</br></br>And, if applicable,enabled as part of the onboarding process|SCE|
</br></br>
|10.0|Health and Status Monitoring|The onboarded platform must support health and status monitoring||WA</br>SCE|
|10.1|Health and Status Alerting|The onboarded platform must provide alerts in the event of system failtures||WA</br>SCE|
</br></br>
|11.0|Backup/Disaster Recovery|The onboarded cloud platform must provide a clearly defined back up disaster recovery plan.</br></br>The plan should include periodic backup of data in compliance with the organization's data retention policy.</br></br>The plan should include multi geo recovery</br></br>The plan should support a predefined disaster recovery plan and enable regular DR drills.||WA</br>SCE|
</br>
|12.0|High Availability Enablement|The onboarded cloud platform must provide a clearly defined solution to reach High Availability and Horizontal Redundancy so that the platform can meet the Humana required level of SLA</br></br>The onboarded platform should implement automatic failover mechanisms to minimize downtime.||WA|
</br>
|13.0|Well Defined Development to Production Process|The onboarded cloud platform must provide a recommended guide and reference architecture to promote NPE to PROD.||SCE|
|13.1|NPE to PROD Automation|The onboarded cloud platfrom’s release cycle from NPE to PROD shall be automated||AF</br>SCE</br>WA|
</br>
|14.0|Patching and Upgrading|The onboarded cloud platform must provide a clearly defined strategy to implement minor and major upgrading strategies. The strategy should support rolling updates for minimizing downtime during upgrades.||SCE|
|14.1|End of Life Support|There should be a well defined process to notify administrators about upcoming end of support for any software and coordinate the upgrade process.||SCE|
</br>
|15.0|Observability|The onboarded platform should provide real-time insights into the operational state of the cloud environment.||WA|
|15.1|Plug and Play Observability Integration|The onboarded platform should support integration with popular observability tools for log aggregation, monitoring, and tracing.|At Humana, the standard is Splunk and Dynatrace|EoI|
|15.2|Sensitive Information Detection|The onboarded platform must scrub logs for sensitive information to ensure credentials are never exposed in log files or system outputs.</br></br>Any accidental logging of sensitive information should trigger immediate alerts to the security team|S&S|
</br>
|16.0|Audit Logging|The onboarded platform shall enable a level of platform logging to meet Humana Audit Compliance Requirements||WA</br>S&S</br>SCE|
</br>
|17.0|Well Defined Humana Operation Model|The onboarded platform shall engage and define an operational model and clearly document the lines of responsibility and points of integration across the stakeholders|RACI (Responsible Accountable, Consult, Inform) Chart should be the minimal output here to define the roles and responsibilities across the teams using the onboarded platform|WA</br>SCE|
|17.1|Secrets Rotation|The onboarded platform must rotate it's secrets.</br></br>The process should be automated, and the frequency of rotation should be in line with corporate security policies||S&S
|17.2|Dedicated Service Accounts|Onboarded platform should have dedicated service accounts with the correct rbac and entitlement to meet programatic operation needs.||S&S|
|17.3|Well Defined Resource Policies|Onboarded platform should have well defined resource policies as guardrails to limit consumptiom and cost||S&S|
</br>
|18.0|Data Retention Policy|- Specify retention periods based on data types and regulatory requirements.</br>- Implement automated mechanisms for data archiving and purging post-retention period.</br>- Establish procedures for legal holds on data when required. ||S&S|
|18.1|Role Based Data Access| - Create predefined roles (e.g., Admin, Manager, Analyst) with specific data access privileges.</br>- Ensure that access to sensitive data is restricted to authorized roles.</br>- Implement a process for granting, reviewing, and revoking access rights.</br>- Audit and log all access and activities for compliance and review. ||S&S|
|18.2|Data Masking|- Apply data masking techniques (e.g., anonymization, pseudonymization) to protect personal and sensitive data.</br>- Ensure masked data maintains referential integrity for testing and development.</br>- Regularly update masking rules in line with data protection regulations. ||S&S|
|18.3|Data Cataloging|- Catalog data assets with metadata, including source, format, quality, and end consumers.</br>- Provide search and discovery tools for easy access to data assets.</br>- Integrate with other data management systems for a unified view. ||S&S|
|18.4|Data Quality Management|- Implement data validation, cleansing, and deduplication processes.</br>- Regularly review and update data quality rules and standards.</br>- Provide tools for data stewards to monitor and improve data quality.||S&S|
|18.5|Data Change Management|- Establish a process for evaluating and implementing changes to data systems.</br>- Ensure that all changes are documented and communicated to relevant stakeholders.</br>- Include rollback procedures to revert changes if needed.||S&S|

## Out of Scope
This document is to capture functional requirements to onboard cloud platforms, any technology or design specific details will be located in respective design documents. These include but are not limited to:
* Technical design documents
* Architecture diagrams
* Any implementation details that is platform specific
