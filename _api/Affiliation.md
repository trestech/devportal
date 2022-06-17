---
layout: page
title: "Affiliation"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | affiliation | 
| name | string | 64 | {string.Join(',', flags)} | affiliation | 
| affiliationMarketingCategory  | table |  |  |  | 
| affiliation_recNo | long |  | {string.Join(',', flags)} | affiliationMarketingCategory | 
| recNo | long |  | {string.Join(',', flags)} | affiliationMarketingCategory | 
| name | string | 64 | {string.Join(',', flags)} | affiliationMarketingCategory | 
| id | string | 16 | {string.Join(',', flags)} | affiliationMarketingCategory | 
| affiliationMarketingElement  | table |  |  | affiliation | 
| recNo | long |  | {string.Join(',', flags)} | affiliationMarketingElement | 
| affiliationMarketingCategory_recNo | long |  | {string.Join(',', flags)} | affiliationMarketingElement | 
| name | string | 64 | {string.Join(',', flags)} | affiliationMarketingElement | 
| id | string | 16 | {string.Join(',', flags)} | affiliationMarketingElement | 


