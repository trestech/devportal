---
layout: api_page
title: "AppUserSearch"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `appUser` | 
| `summaryCount` | `int` |  | `appUser` | 
| `id` | `string` | 64 | `appUser` | 
| `userType` | `short` |  | `appUser` | User = 1, Manager = 2, Admin = 3
| `branch_recNo` | `long` |  | `appUser` | 
| `branchName` | `string` | 64 | `appUser` | 
| `name` | `string` | 64 | `appUser` | 
| `mobilePhone` | `string` | 64 | `appUser` | 
| `email` | `string` | 128 | `appUser` | 
| `enabled` | `bool` |  | `appUser` | 
| `locked` | `DateTimeOffset` |  | `appUser` | 

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
| `id` | [`StringSearchParam`](StringSearchParam) | `id` | 
| `branchRecNo` | [`NumSearchParam`](NumSearchParam) | `branch_recNo` | 
| `userType` | `EnumSearchParam<UserType>` | `userType` | User = 1, Manager = 2, Admin = 3
| `name` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `email` | [`StringSearchParam`](StringSearchParam) | `email` | 
| `enabled` | `bool` | `enabled` | 
| `locked` | `bool` | `locked` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


