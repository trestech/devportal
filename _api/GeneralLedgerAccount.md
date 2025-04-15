---
layout: api_page
title: "GeneralLedgerAccount"
description: ""
assembly_version: "1.4.15.6"
---



Permission Areas: GeneralLedgerAccount

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `generalLedgerAccount` | 
| `name` | `string` | 64 |  | `generalLedgerAccount` | 
| `category` | `short` |  | Required, InsertOnly | `generalLedgerAccount` | Assets = 1, Liabilities = 2, Capital = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| `description` | `string` | 128 |  | `generalLedgerAccount` | 
| `activeStatus` | `bool` |  |  | `generalLedgerAccount` | 
| `balance` | `long` |  | Required, ReadOnly | `generalLedgerAccount` | 
| `indexNo` | `short` |  |  | `generalLedgerAccount` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


