---
layout: api_page
title: "MerchantTransaction"
description: ""
assembly_version: "1.5.5.3"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `merchantTransaction` | 
| `transactionType` | `short` |  | Required | `merchantTransaction` | Sale = 1, Void = 2, Refund = 3
| `amount` | `long` |  | Required | `merchantTransaction` | 
| `cardNumber` | `string` | 64 |  | `merchantTransaction` | 
| `expirationDate` | `Date` |  |  | `merchantTransaction` | 
| `profile_recNo` | `long` |  | FKey | `merchantTransaction` | 
| `name` | `string` | 256 |  | `merchantTransaction` | 
| `companyName` | `string` | 256 |  | `merchantTransaction` | 
| `street1` | `string` | 128 |  | `merchantTransaction` | 
| `zipPostalCode` | `string` | 16 |  | `merchantTransaction` | 
| `dateProcessed` | `DateTimeOffset` |  |  | `merchantTransaction` | 
| `transactionId` | `string` | 32 |  | `merchantTransaction` | 
| `originalTransactionId` | `string` | 32 |  | `merchantTransaction` | 
| `authorizationCode` | `string` | 16 |  | `merchantTransaction` | 
| `authorizationStatus` | `string` | 1 |  | `merchantTransaction` | 
| `authorizationMessage` | `string` | 256 |  | `merchantTransaction` | 
| `orderId` | `string` | 16 |  | `merchantTransaction` | 
| `payment_recNo` | `long` |  | FKey | `merchantTransaction` | 
| `processor` | `short` |  | Required | `merchantTransaction` | WorldNet = 1, Payrix = 2

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


