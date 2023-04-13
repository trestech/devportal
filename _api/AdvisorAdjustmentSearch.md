---
layout: api_page
title: "AdvisorAdjustmentSearch"
description: ""
---



Permission Areas: AdvisorAdjustment

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `advisorAdjustment` | 
| `summaryCount` | `int` |  | `advisorAdjustment` | 
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
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `createDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `advisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `advisorProfile_recNo` | 
| `adjustmentDateFrom` | `DateSearchParam` | `adjustmentDate` | 
| `adjustmentDateTo` | `DateSearchParam` | `adjustmentDate` | 
| `amount` | [`NumSearchParam`](NumSearchParam) | `amount` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


