---
layout: api_page
title: "ActionItemTemplateSearch"
description: "Search action item templates based on filters"
assembly_version: "1.4.8.2"
---

Search action item templates based on filters.

See: [ActionItemTemplate](ActionItemTemplate.html)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `actionItemTemplate` | 
| `summaryCount` | `int` |  | `actionItemTemplate` | 
| `createDateTime` | `DateTimeOffset` |  | `actionItemTemplate` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `actionItemTemplate` | 
| `type` | `short` |  | `actionItemTemplate` | Trip = 1, ClientProfile = 2, Person = 3
| `name` | `string` | 128 | `actionItemTemplate` | 
| `description` | `string` | 256 | `actionItemTemplate` | 
| `appUser_recNo` | `long` |  | `actionItemTemplate` | 
| `appUser_id` | `string` | 64 | `actionItemTemplate` | 

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


