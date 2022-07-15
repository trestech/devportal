---
layout: api_page
title: "GeneralLedgerAccountSearch"
description: ""
---



Referenced Table: [GeneralLedgerAccount]({{ '/api/GeneralLedgerAccount.html' | relative_url }})

Permission Areas: GeneralLedgerAccount

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | GeneralLedgerAccount | 
| summaryCount | int |  | GeneralLedgerAccount | 
| category | short |  | GeneralLedgerAccount | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| name | string | 64 | GeneralLedgerAccount | 
| description | string | 128 | GeneralLedgerAccount | 
| activeStatus | bool |  | GeneralLedgerAccount | 

| Parameter | Type | Linked Column | Linked Parameter | Description |
| --------- | ---- | ------------- | ---------------- | ----------- |
| recNo [inherited] | long |  |  | 
| recNoList [inherited] | long[] |  |  | 
| startingRow [inherited] | int |  |  | 
| rowCount [inherited] | int |  |  | 
| topRows [inherited] | int |  |  | 
| distinct [inherited] | bool |  |  | 
| includeCols [inherited] | string[] |  |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  |  | 
| baseUrl [inherited] | string |  |  | 
| category | short[] |  |  | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| name | string |  |  | 
| nameCond | short |  | name | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


