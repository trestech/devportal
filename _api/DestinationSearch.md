---
layout: api_page
title: "DestinationSearch"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `destination` | 
| `summaryCount` | `int` |  | `destination` | 
| `name` | `string` | 64 | `destination` | 
| `country` | `string` | 4 | `destination` | 
| `regionRecNo` | `long` |  | `destination` | 
| `regionName` | `string` | 64 | `destination` | 

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
| `country` | [`StringSearchParam`](StringSearchParam) | `country` | 
| `regionRecNo` | `EnumSearchParam<Region>` | `regionRecNo` | UnitedStates = 1, Canada = 2, MexicoCentralAmerica = 3, BermudaCaribbean = 4, SouthAmericaAntarctica = 5, Europe = 6, EgyptMiddleEast = 7, Africa = 8, AustraliaNewZealand = 9, Asia = 10, SouthPacific = 11

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


