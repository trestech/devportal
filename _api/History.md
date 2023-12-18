---
layout: api_page
title: "History"
description: ""
assembly_version: "1.0.30.6"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `history` | 
| `timestamp` | `DateTimeOffset` |  | Required | `history` | 
| `action` | `string` | 64 |  | `history` | 
| `tableName` | `string` | 64 |  | `history` | 
| `tableRecNo` | `long` |  |  | `history` | 
| `tableRecNo2` | `long` |  |  | `history` | 
| `columnName` | `string` | 64 |  | `history` | 
| `description` | `string` | 256 |  | `history` | 
| `oldValue` | `string` | 256 |  | `history` | 
| `newValue` | `string` | 256 |  | `history` | 
| `appUser_recNo` | `long` |  |  | `history` | 
| `appUser_id` | `string` | 64 |  | `history` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


