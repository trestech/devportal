---
layout: api_page
title: "ClientItinAgency"
description: ""
assembly_version: "1.0.41.7"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `name` | `string` | 256 |  | `clientItinAgency` | 
| `phone` | `string` | 256 |  | `clientItinAgency` | 
| `email` | `string` | 256 |  | `clientItinAgency` | 
| `street1` | `string` | 128 |  | `clientItinAgency` | 
| `street2` | `string` | 128 |  | `clientItinAgency` | 
| `city` | `string` | 64 |  | `clientItinAgency` | 
| `stateProvince` | `string` | 8 |  | `clientItinAgency` | 
| `zipPostalCode` | `string` | 16 |  | `clientItinAgency` | 
| `country` | `string` | 4 |  | `clientItinAgency` | 
| `headerInfo` | `string` | 512 |  | `clientItinAgency` | 
| `logoData` | `byte[]` |  |  | `clientItinAgency` | 
| `logoDirectUrl` | `string` | 256 |  | `clientItinAgency` | 
| `brandingColor` | `int` |  |  | `clientItinAgency` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


