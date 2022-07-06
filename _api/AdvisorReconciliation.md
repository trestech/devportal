---
layout: api_page
title: "AdvisorReconciliation"
description: ""
---



Permission Areas: AdvisorReconciliation

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | advisorReconciliation | 
| reconciliationDate | Date |  |  | advisorReconciliation | 
| description | string | 64 |  | advisorReconciliation | 
| advisorReconciliationDetail  | table |  |  | advisorReconciliation | 
| reservationAdvisor_recNo | long |  | PKey,FKey | advisorReconciliationDetail | 
| advisorReconciliation_recNo | long |  | FKey | advisorReconciliationDetail | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


