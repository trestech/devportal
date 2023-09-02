---
layout: api_page
title: "Affiliation"
description: ""
assembly_version: "1.0.23.2"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `affiliation` | 
| `name` | `string` | 64 |  | `affiliation` | 
| `affiliationMarketingCategory ` | table |  |  | `affiliation` | 
| `affiliation_recNo` | `long` |  | PKey, InsertOnly, FKey | `affiliationMarketingCategory` | 
| `recNo` | `long` |  | PKey | `affiliationMarketingCategory` | 
| `name` | `string` | 64 | Required | `affiliationMarketingCategory` | 
| `id` | `string` | 16 |  | `affiliationMarketingCategory` | 
| `affiliationMarketingElement ` | table |  |  | `affiliationMarketingCategory` | 
| `recNo` | `long` |  | PKey | `affiliationMarketingElement` | 
| `affiliationMarketingCategory_recNo` | `long` |  | InsertOnly, FKey | `affiliationMarketingElement` | 
| `name` | `string` | 64 | Required | `affiliationMarketingElement` | 
| `id` | `string` | 16 | Required | `affiliationMarketingElement` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


