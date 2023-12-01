---
layout: api_page
title: "IarReconciliationSearch"
description: "Search IAR reconciliation on filters"
assembly_version: "1.0.29.5"
---

Search IAR reconciliation on filters.

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `iarReconciliation` | 
| `summaryCount` | `int` |  | `iarReconciliation` | 
| `createDateTime` | `DateTimeOffset` |  | `iarReconciliation` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `iarReconciliation` | 
| `arcNumber` | `long` |  | `iarReconciliation` | 
| `fromDate` | `Date` |  | `iarReconciliation` | 
| `toDate` | `Date` |  | `iarReconciliation` | 
| `reservationRecNo` | `long` |  | `iarReconciliation` | 
| `tripRecNo` | `long` |  | `iarReconciliation` | 
| `reservationTicketDate` | `Date` |  | `iarReconciliation` | 
| `reservationTicketNo` | `long` |  | `iarReconciliation` | 
| `reservationRecordLocator` | `string` | 32 | `iarReconciliation` | 
| `exception` | `string` | 256 | `iarReconciliation` | 

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
| `iarFileData` | `byte[]` |  | 
| `ignoreDupeVoids` | `bool` |  | 
| `ignoreSpoiledVoids` | `bool` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


