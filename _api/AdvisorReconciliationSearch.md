---
layout: api_page
title: "AdvisorReconciliationSearch"
description: ""
---



Permission Areas: AdvisorReconciliation

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | advisorReconciliation | 
| summaryCount | int |  | advisorReconciliation | 
| reconciliationDate | Date |  | advisorReconciliation | 
| description | string | 64 | advisorReconciliation | 

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
| createDateTimeFrom | DateTimeUTCSearchParam |  | 
| createDateTimeTo | DateTimeUTCSearchParam |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


