---
layout: api_page
title: "TripImportSearch"
description: ""
assembly_version: "1.0.21.8"
---



Permission Areas: TripImport

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `tripImport` | 
| `summaryCount` | `int` |  | `tripImport` | 
| `createDateTime` | `DateTimeOffset` |  | `tripImport` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `tripImport` | 
| `type` | `short` |  | `tripImport` | NotSpecified = 0, DirectConnectXML = 1, GDSInterfaceText = 2, GDSPnrXml = 3, ReservationJson = 4
| `subType` | `string` | 8 | `tripImport` | 
| `source` | `string` | 64 | `tripImport` | 
| `recordLocator` | `string` | 6 | `tripImport` | 
| `status` | `short` |  | `tripImport` | Pending = 1, Imported = 2, Error = 3, Warning = 4
| `statusMessage` | `string` | 256 | `tripImport` | 
| `advisorProfile_recNo` | `long` |  | `tripImport` | 
| `advisorProfile_Name` | `string` | 256 | `tripImport` | 
| `branch_recNo` | `long` |  | `tripImport` | 
| `branch_name` | `string` | 64 | `tripImport` | 
| `tripReference` | `string` | 64 | `tripImport` | 
| `trip_RecNo` | `long` |  | `tripImport` | 
| `gdsInvoiceType` | `short` |  | `tripImport` | Unknown = 0, Sale = 1, Refund = 2, ItinOnly = 3, ItinUpdate = 4, BoardingPass = 5, Void = 6

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
| `type` | `EnumSearchParam<ImportType>` | `type` | NotSpecified = 0, DirectConnectXML = 1, GDSInterfaceText = 2, GDSPnrXml = 3, ReservationJson = 4
| `status` | `EnumSearchParam<Status>` | `status` | Pending = 1, Imported = 2, Error = 3, Warning = 4
| `tripRecNo` | [`NumSearchParam`](NumSearchParam) | `trip_RecNo` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


