---
layout: api_page
title: "BranchSearch"
description: ""
---



Referenced Table: [Branch]({{ '/api/Branch.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | branch | 
| summaryCount | int |  | branch | 
| name | string | 64 | branch | 
| description | string | 128 | branch | 

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
| name | string |  |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


