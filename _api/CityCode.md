---
layout: api_page
title: "CityCode"
description: ""
assembly_version: "1.0.23.3"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `cityCode` | 
| `codeType` | `short` |  | Required | `cityCode` | Airport = 1, TrainStation = 2
| `code` | `string` | 4 | Required | `cityCode` | 
| `name` | `string` | 128 |  | `cityCode` | 
| `city` | `string` | 64 |  | `cityCode` | 
| `stateProvince` | `string` | 64 |  | `cityCode` | 
| `country` | `string` | 4 |  | `cityCode` | 
| `description` | `string` | 128 |  | `cityCode` | 
| `domIntlIndicator` | `short` |  | Required | `cityCode` | Domestic = 1, International = 2, Transborder = 3
| `latitude` | `double` |  |  | `cityCode` | 
| `longitude` | `double` |  |  | `cityCode` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


