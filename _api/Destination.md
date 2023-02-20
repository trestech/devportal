---
layout: api_page
title: "Destination"
description: ""
---



Permission Areas: Destination

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `destination` | 
| `name` | `string` | 64 | Required | `destination` | 
| `country` | `string` | 4 |  | `destination` | 
| `region_recNo` | `long` |  | FKey | `destination` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


