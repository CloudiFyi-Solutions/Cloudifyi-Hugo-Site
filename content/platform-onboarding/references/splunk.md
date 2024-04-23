+++
title = "Splunk Logging and Monitoring"
+++

## Splunk Logging and Monitoring

### Gettin Started

Get yourself added to `AZ_Splunk_SAML_SSO_dataplatform_eng` AD group. This will give you access to the [Splunk UI](https://biggreen.splunkcloud.com/).

- URI [https://biggreen.splunkcloud.com/](https://biggreen.splunkcloud.com/)

`index` in Splunk is a collection of events. Access control is granualar at the index level.  If our team needs access to additional indexes, we can request access to them.

#### Steps to get access to new Index

 - Create a ticket in ServiceNow via go/gen
 - Specifcy our AD group `AZ_Splunk_SAML_SSO_dataplatform_eng` and the index you need access in the description
 - Assign to group `Monitoring & Metrics_Splunk`

> By default we have access to firewall and paloalto indexes

### Querying Splunk

Here is a sample query to get started with. Replace `SOURCE` and `DESTINATION` with the IP addresses you want to query.

```sql
index=firewall OR index=paloalto src_ip="SOURCE" AND dest_ip="DESTINATION" AND action=Deny OR action=blocked | table timestamp generated_time host src_ip src_port dest_ip dest_port action reason vendor_action session_end_reason rule

```
