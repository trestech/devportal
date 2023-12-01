---
layout: api_page
title: "Bank"
description: ""
assembly_version: "1.0.29.5"
---



Permission Areas: Bank

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `bank` | 
| `name` | `string` | 64 |  | `bank` | 
| `description` | `string` | 128 |  | `bank` | 
| `accountingReference` | `string` | 64 |  | `bank` | 
| `balance` | `long` |  | Required, ReadOnly | `bank` | 
| `generalLedgerAccount_recNo` | `long` |  | FKey | `bank` | 
| `generalLedgerAccount_name` | `string` | 64 | ReadOnly | `bank` | 
| `activeStatus` | `short` |  | Required | `bank` | Inactive = 0, Active = 1, Pending = 2

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


