---
layout: api_page
title: "TagSearch"
description: ""
---



Permission Areas: Tag

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | tag | 
| summaryCount | int |  | tag | 
| name | string | 64 | tag | 
| referenced | bool |  | tag | 
| activeStatus | bool |  | tag | 
| valueFreeFlow | bool |  | tag | 
| valueRequired | bool |  | tag | 
| valueList | string | 1024 | tag | 
| description | string | 64 | tag | 

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
| name | [StringSearchParam](StringSearchParam) | name | 
| activeStatus | bool | activeStatus | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


