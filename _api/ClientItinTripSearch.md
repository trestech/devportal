---
layout: api_page
title: "ClientItinTripSearch"
description: ""
assembly_version: "1.0.19.9"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `trip` | 
| `summaryCount` | `int` |  | `trip` | 
| `createDateTime` | `DateTimeOffset` |  | `trip` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `trip` | 
| `name` | `string` | 256 | `trip` | 
| `startDateTime` | `DateTime` |  | `trip` | 
| `endDateTime` | `DateTime` |  | `trip` | 
| `imageUrl` | `string` | 256 | `trip` | 
| `imageAttachmentRecNo` | `long` |  | `trip` | 
| `imageData` | `byte[]` |  | `trip` | 

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
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


