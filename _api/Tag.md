---
layout: api_page
title: "Tag"
description: ""
---



Permission Areas: Tag

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | tag | 
| name | string | 64 | Required | tag | 
| activeStatus | bool |  |  | tag | 
| valueFreeFlow | bool |  |  | tag | 
| valueRequired | bool |  |  | tag | 
| valueList | string | 1024 |  | tag | 
| description | string | 64 |  | tag | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


