---
layout: page
title: "AdvisorReconciliation"
description: "| Column | Type | Size | Flags | Table | Description |"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | advisorReconciliation | 
| reconciliationDate | Date |  |  | advisorReconciliation | 
| description | string | 64 |  | advisorReconciliation | 
| advisorReconciliationDetail  | table |  |  | advisorReconciliation | 
| reservationAdvisor_recNo | long |  | PKey,FKey | advisorReconciliationDetail | 
| advisorReconciliation_recNo | long |  | FKey | advisorReconciliationDetail | 


