---
layout: api_page
title: "Bank"
description: ""
assembly_version: "1.5.5.3"
---



Permission Areas: Bank

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `bank` | 
| `name` | `string` | 64 |  | `bank` | 
| `description` | `string` | 128 |  | `bank` | 
| `accountingReference` | `string` | 64 |  | `bank` | 
| `balance` | `long` |  | Required | `bank` | 
| `generalLedgerAccount_recNo` | `long` |  | FKey | `bank` | 
| `generalLedgerAccount_name` | `string` | 64 | ReadOnly | `bank` | 
| `activeStatus` | `short` |  | Required | `bank` | Inactive = 0, Active = 1, Pending = 2
| `currencyCode` | `string` | 3 | InsertOnly | `bank` | 
| `conversionRate` | `int` |  |  | `bank` | Percentage values have an implied 4 digits after the decimal point. A value of 0.2512 == 25.12% is represented as 251200
| `currencyConversionGeneralLedgerAccount_recNo` | `long` |  | FKey | `bank` | 
| `currencyConversionGeneralLedgerAccount_name` | `string` | 64 | ReadOnly | `bank` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


