---
layout: api_page
title: "DocumentTemplateSearch"
description: "Search document templates based on filters"
assembly_version: "1.0.30.6"
---

Search document templates based on filters.

See: [DocumentTemplate](DocumentTemplate.html)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `documentTemplate` | 
| `summaryCount` | `int` |  | `documentTemplate` | 
| `createDateTime` | `DateTimeOffset` |  | `documentTemplate` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `documentTemplate` | 
| `name` | `string` | 128 | `documentTemplate` | 
| `description` | `string` | 512 | `documentTemplate` | 
| `appUser_RecNo` | `long` |  | `documentTemplate` | 
| `activeStatus` | `bool` |  | `documentTemplate` | 
| `area` | `short` |  | `documentTemplate` | Trip = 1, ClientProfile = 2, Person = 3

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
| `name` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `activeStatus` | `bool` | `activeStatus` | 
| `area` | `bool` | `area` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


