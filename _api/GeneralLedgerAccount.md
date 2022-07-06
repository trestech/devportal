---
layout: api_page
title: "GeneralLedgerAccount"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | GeneralLedgerAccount | 
| name | string | 64 |  | GeneralLedgerAccount | 
| category | short |  | Required | GeneralLedgerAccount | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| description | string | 128 |  | GeneralLedgerAccount | 
| activeStatus | bool |  |  | GeneralLedgerAccount | 
| balance | long |  | Required,ReadOnly | GeneralLedgerAccount | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


