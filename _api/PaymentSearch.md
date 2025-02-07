---
layout: api_page
title: "PaymentSearch"
description: "Search payments based on filters"
assembly_version: "1.4.10.5"
---

Search payments based on filters.

See: [ClientPayment](ClientPayment.html), [SupplierPayment](SupplierPayment.html), [OtherPayment](OtherPayment.html)

Permission Areas: ClientPayment, SupplierPayment, OtherPayment

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `payment` | 
| `tagRecNo` | `long` |  | `payment` | 
| `tagName` | `string` | 64 | `payment` | 
| `tagValue` | `string` | 1024 | `payment` | 
| `tags` | `string` |  | `payment` | 
| `summaryCount` | `int` |  | `payment` | 
| `createDateTime` | `DateTimeOffset` |  | `payment` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `payment` | 
| `profileType` | `short` |  | `payment` | Client = 1, Supplier = 2, Other = 3
| `profileRecNo` | `long` |  | `payment` | 
| `profileName` | `string` | 256 | `payment` | 
| `amount` | `long` |  | `payment` | 
| `paymentDate` | `Date` |  | `payment` | 
| `payType` | `short` |  | `payment` | Received = 1, Made = 2
| `method` | `short` |  | `payment` | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| `bankRecNo` | `long` |  | `payment` | 
| `bankName` | `string` | 64 | `payment` | 
| `agencyProcessed` | `bool` |  | `payment` | 
| `cardNumber` | `string` | 64 | `payment` | 
| `nameOnCard` | `string` | 64 | `payment` | 
| `checkNumber` | `long` |  | `payment` | 
| `reservationRecNo` | `long` |  | `paymentDetail` | 
| `reservationAmount` | `long` |  | `paymentDetail` | 
| `voided` | `bool` |  | `payment` | 
| `accountingEntryRecNo` | `long` |  | `payment` | 
| `remarks` | `string` | 256 | `payment` | 
| `dateCleared` | `Date` |  | `payment` | 
| `agencyCardRecNo` | `long` |  | `payment` | 
| `agencyCardName` | `string` | 512 | `payment` | 
| `bankTransactionRecNo` | `long` |  | `payment` | 
| `paidBy` | `short` |  | `payment` | Client = 1, Supplier = 2, Other = 3
| `paidTo` | `short` |  | `payment` | Client = 1, Supplier = 2, Other = 3

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
| `profileType` | [`short<short>`] | `profileType` | Client = 1, Supplier = 2, Other = 3
| `tripRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `reservationRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationRecNo` | 
| `paymentDateFrom` | `DateSearchParam` | `paymentDate` | 
| `paymentDateTo` | `DateSearchParam` | `paymentDate` | 
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `profileRecNo` | 
| `supplierProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `profileRecNo` | 
| `otherProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `profileRecNo` | 
| `payType` | [`short<short>`] |  | Received = 1, Made = 2
| `method` | `EnumSearchParam<Method>` | `method` | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| `bankRecNo` | [`NumSearchParam`](NumSearchParam) | `bankRecNo` | 
| `agencyProcessed` | `bool` | `agencyProcessed` | 
| `voided` | `bool` | `voided` | 
| `cleared` | `bool` | `dateCleared` | 
| `dateClearedFrom` | `DateSearchParam` | `dateCleared` | 
| `dateClearedTo` | `DateSearchParam` | `dateCleared` | 
| `bankTransactionRecNo` | [`NumSearchParam`](NumSearchParam) | `bankTransactionRecNo` | 
| `paidBy` | [`short<short>`] |  | Client = 1, Supplier = 2, Other = 3, Agency = 4
| `paidTo` | [`short<short>`] |  | Client = 1, Supplier = 2, Other = 3, Agency = 4
| `amount` | [`NumSearchParam`](NumSearchParam) | `amount` | 
| `agencyCardRecNo` | [`NumSearchParam`](NumSearchParam) | `agencyCardRecNo` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


