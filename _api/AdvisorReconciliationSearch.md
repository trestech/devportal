---
layout: api_page
title: "AdvisorReconciliationSearch"
description: ""
---



Referenced Table: [AdvisorReconciliation]({{ '/api/AdvisorReconciliation.html' | relative_url }})

Permission Areas: AdvisorReconciliation

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | advisorReconciliation | 
| summaryCount | int |  | advisorReconciliation | 
| reconciliationDate | Date |  | advisorReconciliation | 
| description | string | 64 | advisorReconciliation | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| createDateTimeFrom | DateTimeOffset |  | 
| createDateTimeTo | DateTimeOffset |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


