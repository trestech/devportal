---
layout: api_page
title: "Tag"
description: ""
assembly_version: "1.0.23.2"
---



Permission Areas: Tag

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `tag` | 
| `name` | `string` | 64 | Required | `tag` | 
| `activeStatus` | `bool` |  |  | `tag` | 
| `valueFreeFlow` | `bool` |  |  | `tag` | 
| `valueRequired` | `bool` |  |  | `tag` | 
| `valueList` | `string` |  |  | `tag` | 
| `description` | `string` | 64 |  | `tag` | 
| `areaFlags` | `int` |  |  | `tag` | All = 0, Client = 1, Traveler = 2, Supplier = 4, Advisor = 8, Trip = 16, Reservation = 32, Payment = 64, Activity = 128, AdvisorAdjustment = 256, Destination = 512, Branch = 1024
| `requirement` | `short` |  | Required | `tag` | Optional = 1, Recommended = 2, Mandatory = 3
| `defaultValue` | `string` | 128 |  | `tag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


