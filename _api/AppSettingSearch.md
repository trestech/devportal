---
layout: api_page
title: "AppSettingSearch"
description: ""
assembly_version: "1.0.13.6"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `appSetting` | 
| `summaryCount` | `int` |  | `appSetting` | 
| `createDateTime` | `DateTimeOffset` |  | `appSetting` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `appSetting` | 
| `appUser_recNo` | `long` |  | `appSetting` | 
| `area` | `string` | 64 | `appSetting` | 
| `name` | `string` | 64 | `appSetting` | 
| `description` | `string` | 64 | `appSetting` | 
| `data` | `string` |  | `appSetting` | 
| `userType` | `short` |  | `appSetting` | User = 1, Manager = 2, Admin = 3

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
| `area` | `string` | `area` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


