---
layout: api_page
title: "GeneralLedgerAccountSearch"
description: ""
---



Referenced Table: [GeneralLedgerAccount]({{ '/api/GeneralLedgerAccount.html' | relative_url }})

Permission Areas: GeneralLedgerAccount

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | generalLedgerAccount | 
| summaryCount | int |  | generalLedgerAccount | 
| category | short |  | generalLedgerAccount | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| name | string | 64 | generalLedgerAccount | 
| description | string | 128 | generalLedgerAccount | 
| activeStatus | bool |  | generalLedgerAccount | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| recNo [inherited] | [NumSearchParam](NumSearchParam) |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| category | `EnumSearchParam<Category>` | category | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| name | [StringSearchParam](StringSearchParam) | name | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


