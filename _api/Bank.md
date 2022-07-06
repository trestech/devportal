---
layout: api_page
title: "Bank"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | bank | 
| name | string | 64 |  | bank | 
| description | string | 128 |  | bank | 
| accountingReference | string | 64 |  | bank | 
| balance | long |  | Required,ReadOnly | bank | 
| generalLedgerAccount_recNo | long |  | FKey | bank | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


