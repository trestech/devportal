---
layout: api_page
title: "Branch"
description: ""
assembly_version: "1.0.21.8"
---



Permission Areas: Branch

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `branch` | 
| `name` | `string` | 64 |  | `branch` | 
| `description` | `string` | 128 |  | `branch` | 
| `phone` | `string` | 256 |  | `branch` | 
| `email` | `string` | 256 |  | `branch` | 
| `street1` | `string` | 128 |  | `branch` | 
| `street2` | `string` | 128 |  | `branch` | 
| `city` | `string` | 64 |  | `branch` | 
| `stateProvince` | `string` | 8 |  | `branch` | 
| `zipPostalCode` | `string` | 16 |  | `branch` | 
| `country` | `string` | 4 |  | `branch` | 
| `headerInfo` | `string` | 512 |  | `branch` | 
| `logoData` | `byte[]` |  |  | `branch` | 
| `itineraryRemarks` | `string` |  |  | `branch` | 
| `brandingColor` | `int` |  |  | `branch` | 
| `branchTag ` | table |  |  | `branch` | 
| `recNo` | `long` |  | PKey | `branchTag` | 
| `branch_recNo` | `long` |  | InsertOnly, FKey | `branchTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `branchTag` | 
| `name` | `string` | 64 | ReadOnly | `branchTag` | 
| `value` | `string` | 1024 |  | `branchTag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


