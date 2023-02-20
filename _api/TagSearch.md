---
layout: api_page
title: "TagSearch"
description: ""
---



Permission Areas: Tag

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `tag` | 
| `summaryCount` | `int` |  | `tag` | 
| `name` | `string` | 64 | `tag` | 
| `referenced` | `bool` |  | `tag` | 
| `activeStatus` | `bool` |  | `tag` | 
| `valueFreeFlow` | `bool` |  | `tag` | 
| `valueRequired` | `bool` |  | `tag` | 
| `valueList` | `string` |  | `tag` | 
| `description` | `string` | 64 | `tag` | 
| `areaFlags` | `int` |  | `tag` | All = 0, Client = 1, Traveler = 2, Supplier = 4, Advisor = 8, Trip = 16, Reservation = 32, Payment = 64, Activity = 128

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `name` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `activeStatus` | `bool` | `activeStatus` | 
| `areaFlags` | `long` | `areaFlags` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


