---
layout: api_page
title: "GeneralLedgerBranch"
description: ""
assembly_version: "1.5.6.5"
---



Permission Areas: GeneralLedgerAccount

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `generalLedgerBranch` | 
| `name` | `string` | 64 | Required | `generalLedgerBranch` | 
| `activeStatus` | `bool` |  | Required | `generalLedgerBranch` | 
| `description` | `string` | 128 |  | `generalLedgerBranch` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


