---
layout: api_page
title: "HistorySearch"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | history | 
| summaryCount | int |  | history | 
| timestamp | DateTimeOffset |  | history | 
| appUser_recNo | long |  | history | 
| appUser_id | string | 64 | history | 
| action | string | 64 | history | 
| tableName | string | 64 | history | 
| tableRecNo | long |  | history | 
| tableRecNo2 | long |  | history | 
| columnName | string | 64 | history | 
| description | string | 256 | history | 
| oldValue | string | 256 | history | 
| newValue | string | 256 | history | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| recNo [inherited] | [NumSearchParam](NumSearchParam) | recNo | 
| startingRow [inherited] | long |  | 
| rowCount [inherited] | long |  | 
| topRows [inherited] | long |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| tableName | [StringSearchParam](StringSearchParam) | tableName | 
| tableRecNo | [NumSearchParam](NumSearchParam) | tableRecNo | 
| tableRecNo2 | [NumSearchParam](NumSearchParam) | tableRecNo2 | 
| action | [StringSearchParam](StringSearchParam) | action | 
| timeStampFrom | DateTimeOffset |  | 
| timeStampTo | DateTimeOffset |  | 
| appUser_recNo | [NumSearchParam](NumSearchParam) | appUser_recNo | 
| appUser_id | [StringSearchParam](StringSearchParam) | appUser_id | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


