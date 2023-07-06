---
layout: api_page
title: "AdvisorAdjustmentSearch"
description: ""
assembly_version: "1.0.18.13"
---



Permission Areas: AdvisorAdjustment

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `advisorAdjustment` | 
| `summaryCount` | `int` |  | `advisorAdjustment` | 
| `createDateTime` | `DateTimeOffset` |  | `advisorAdjustment` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `advisorAdjustment` | 
| `advisorProfile_recNo` | `long` |  | `advisorAdjustment` | 
| `advisorProfile_nameLookup` | `string` | 256 | `advisorAdjustment` | 
| `adjustmentDate` | `Date` |  | `advisorAdjustment` | 
| `amount` | `long` |  | `advisorAdjustment` | 
| `description` | `string` | 128 | `advisorAdjustment` | 
| `reconciliationRecNo` | `long` |  | `advisorAdjustment` | 
| `reconciliationDate` | `Date` |  | `advisorAdjustment` | 

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
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `advisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `advisorProfile_recNo` | 
| `adjustmentDateFrom` | `DateSearchParam` | `adjustmentDate` | 
| `adjustmentDateTo` | `DateSearchParam` | `adjustmentDate` | 
| `amount` | [`NumSearchParam`](NumSearchParam) | `amount` | 
| `reconciliationDateFrom` | `DateSearchParam` | `reconciliationDate` | 
| `reconciliationDateTo` | `DateSearchParam` | `reconciliationDate` | 
| `ReconciliationRecNo` | [`NumSearchParam`](NumSearchParam) | `reconciliationRecNo` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


