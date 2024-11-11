---
layout: api_page
title: "PaymentReconSearch"
description: ""
assembly_version: "1.4.4.3"
---



Permission Areas: SupplierPayment

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `paymentRecon` | 
| `summaryCount` | `int` |  | `paymentRecon` | 
| `createDateTime` | `DateTimeOffset` |  | `paymentRecon` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `paymentRecon` | 
| `provider` | `short` |  | `paymentRecon` | Onyx = 1, Paymode = 2
| `paymentDate` | `Date` |  | `paymentRecon` | 
| `supplierProfile_recNo` | `long` |  | `paymentRecon` | 
| `supplierProfile_Name` | `string` | 256 | `paymentRecon` | 
| `supplierPayment_recNo` | `long` |  | `paymentRecon` | 
| `amount` | `long` |  | `paymentRecon` | 

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
| `provider` | `EnumSearchParam<PaymentReconProvider>` | `provider` | Onyx = 1, Paymode = 2
| `supplierPaymentRecNo` | [`NumSearchParam`](NumSearchParam) | `supplierPayment_recNo` | 
| `paymentDateFrom` | `DateSearchParam` | `paymentDate` | 
| `paymentDateTo` | `DateSearchParam` | `paymentDate` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


