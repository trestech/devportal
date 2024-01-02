---
layout: api_page
title: "AdvisorReconciliationSearch"
description: "Search advisor reconciliation based on filters"
assembly_version: "1.0.32.1"
---

Search advisor reconciliation based on filters.

See: [Advisor Reconciliation](AdvisorReconciliation.html)

Permission Areas: AdvisorReconciliation

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `advisorReconciliation` | 
| `summaryCount` | `int` |  | `advisorReconciliation` | 
| `createDateTime` | `DateTimeOffset` |  | `advisorReconciliation` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `advisorReconciliation` | 
| `reconciliationDate` | `Date` |  | `advisorReconciliation` | 
| `description` | `string` | 128 | `advisorReconciliation` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `createDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


