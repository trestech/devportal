---
layout: api_page
title: "AdvisorReconciliation"
description: ""
assembly_version: "1.4.7.2"
---



Permission Areas: AdvisorReconciliation

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `advisorReconciliation` | 
| `reconciliationDate` | `Date` |  |  | `advisorReconciliation` | 
| `description` | `string` | 128 |  | `advisorReconciliation` | 
| `advisorReconciliationDetail ` | table |  |  | `advisorReconciliation` | 
| `reservationAdvisor_recNo` | `long` |  | PKey, Required, FKey | `advisorReconciliationDetail` | 
| `advisorReconciliation_recNo` | `long` |  | PKey, InsertOnly, FKey | `advisorReconciliationDetail` | 
| `amount` | `long` |  |  | `advisorReconciliationDetail` | 
| `advisorReconciliationAdjustment ` | table |  |  | `advisorReconciliation` | 
| `advisorAdjustment_recNo` | `long` |  | PKey, Required, FKey | `advisorReconciliationAdjustment` | 
| `advisorReconciliation_recNo` | `long` |  | PKey, InsertOnly, FKey | `advisorReconciliationAdjustment` | 
| `amount` | `long` |  |  | `advisorReconciliationAdjustment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


