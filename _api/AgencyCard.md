---
layout: api_page
title: "AgencyCard"
description: ""
assembly_version: "1.4.4.3"
---



Permission Areas: AgencyCard

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `agencyCard` | 
| `name` | `string` | 512 |  | `agencyCard` | 
| `cardNumber` | `string` | 64 | Required | `agencyCard` | 
| `cardNumberToken` | `string` | 64 |  | `agencyCard` | 
| `nameOnCard` | `string` | 64 |  | `agencyCard` | 
| `expirationDate` | `Date` |  |  | `agencyCard` | 
| `activeStatus` | `short` |  | Required | `agencyCard` | Inactive = 0, Active = 1, Pending = 2
| `generalLedgerAccount_recNo` | `long` |  | FKey | `agencyCard` | 
| `generalLedgerAccount_name` | `string` | 64 | ReadOnly, Lookup | `agencyCard` | 
| `description` | `string` | 512 |  | `agencyCard` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


