---
layout: api_page
title: "TripImport"
description: ""
assembly_version: "1.0.32.1"
---



Permission Areas: TripImport

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `tripImport` | 
| `type` | `short` |  |  | `tripImport` | NotSpecified = 0, DirectConnectXML = 1, GDSInterfaceText = 2, GDSPnrXml = 3, ReservationJson = 4
| `subType` | `short` |  |  | `tripImport` | 
| `source` | `string` | 64 |  | `tripImport` | 
| `recordLocator` | `string` | 6 |  | `tripImport` | 
| `data` | `string` |  | InsertOnly | `tripImport` | 
| `status` | `short` |  |  | `tripImport` | Pending = 1, Imported = 2, Error = 3, Warning = 4
| `statusMessage` | `string` | 256 |  | `tripImport` | 
| `advisorProfile_recNo` | `long` |  | FKey | `tripImport` | 
| `advisorProfile_Name` | `string` | 256 | ReadOnly, Lookup | `tripImport` | 
| `branch_recNo` | `long` |  | FKey | `tripImport` | 
| `branch_name` | `string` | 64 | ReadOnly, Lookup | `tripImport` | 
| `tripReference` | `string` | 64 |  | `tripImport` | 
| `trip_RecNo` | `long` |  | FKey | `tripImport` | 
| `gdsInvoiceType` | `short` |  |  | `tripImport` | Unknown = 0, Sale = 1, Refund = 2, ItinOnly = 3, ItinUpdate = 4, BoardingPass = 5, Void = 6

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


