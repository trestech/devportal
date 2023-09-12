---
layout: api_page
title: "AppSetting"
description: ""
assembly_version: "1.0.24.1"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `appSetting` | 
| `appUser_recNo` | `long` |  |  | `appSetting` | 
| `area` | `string` | 64 |  | `appSetting` | 
| `name` | `string` | 64 | Required | `appSetting` | 
| `description` | `string` | 64 |  | `appSetting` | 
| `data` | `string` |  | Required | `appSetting` | 
| `userType` | `short` |  |  | `appSetting` | User = 1, Manager = 2, Admin = 3

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


