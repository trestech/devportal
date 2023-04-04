---
layout: api_page
title: "AdvisorAdjustment"
description: ""
---



Permission Areas: AdvisorAdjustment

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `advisorAdjustment` | 
| `advisorProfile_recNo` | `long` |  | Required, FKey | `advisorAdjustment` | 
| `advisorProfile_nameLookup` | `string` | 256 | ReadOnly | `advisorAdjustment` | 
| `adjustmentDate` | `Date` |  | Required | `advisorAdjustment` | 
| `amount` | `long` |  | Required | `advisorAdjustment` | 
| `description` | `string` | 128 |  | `advisorAdjustment` | 
| `remarks` | `string` | 512 |  | `advisorAdjustment` | 
| `advisorAdjustmentTag ` | table |  |  | `advisorAdjustment` | 
| `recNo` | `long` |  | PKey | `advisorAdjustmentTag` | 
| `advisorAdjustment_recNo` | `long` |  | InsertOnly, FKey | `advisorAdjustmentTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `advisorAdjustmentTag` | 
| `name` | `string` | 64 | ReadOnly | `advisorAdjustmentTag` | 
| `value` | `string` | 1024 |  | `advisorAdjustmentTag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


