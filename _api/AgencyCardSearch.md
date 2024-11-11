---
layout: api_page
title: "AgencyCardSearch"
description: ""
assembly_version: "1.4.4.3"
---



Permission Areas: AgencyCard

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `agencyCard` | 
| `summaryCount` | `int` |  | `agencyCard` | 
| `createDateTime` | `DateTimeOffset` |  | `agencyCard` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `agencyCard` | 
| `name` | `string` | 512 | `agencyCard` | 
| `nameOnCard` | `string` | 64 | `agencyCard` | 
| `cardNumber` | `string` | 64 | `agencyCard` | 
| `expirationDate` | `Date` |  | `agencyCard` | 
| `generalLedgerAccount_recNo` | `long` |  | `agencyCard` | 
| `generalLedgerAccount_name` | `string` | 64 | `agencyCard` | 
| `activeStatus` | `short` |  | `agencyCard` | Inactive = 0, Active = 1, Pending = 2

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
| `activeStatus` | [`short<short>`] | `activeStatus` | Inactive = 0, Active = 1, Pending = 2

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


