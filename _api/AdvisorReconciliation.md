---
layout: page
title: "AdvisorReconciliation"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | Key | advisorReconciliation | 
| reconciliationDate | Date |  |  | advisorReconciliation | 
| description | string | 64 |  | advisorReconciliation | 
| advisorReconciliationDetail  | table |  |  |  | 
| reservationAdvisor_recNo | long |  | Key,FKey | advisorReconciliationDetail | 
| advisorReconciliation_recNo | long |  | FKey | advisorReconciliationDetail | 


