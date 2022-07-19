---
layout: api_page
title: "DestinationSearch"
description: ""
---



Referenced Table: [Destination]({{ '/api/Destination.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | destination | 
| summaryCount | int |  | destination | 
| name | string | 64 | destination | 
| country | string | 4 | destination | 
| regionRecNo | long |  | destination | 
| regionName | string | 64 | destination | 

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
| name | string | name |  | 
| country | string | country |  | 
| regionRecNo | long | regionRecNo |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


