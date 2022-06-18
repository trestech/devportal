---
layout: page
title: "Affiliation"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | Key | affiliation | 
| name | string | 64 |  | affiliation | 
| affiliationMarketingCategory  | table |  |  |  | 
| affiliation_recNo | long |  | Key,FKey | affiliationMarketingCategory | 
| recNo | long |  | Key | affiliationMarketingCategory | 
| name | string | 64 | Required | affiliationMarketingCategory | 
| id | string | 16 |  | affiliationMarketingCategory | 
| affiliationMarketingElement  | table |  |  | affiliation | 
| recNo | long |  | Key | affiliationMarketingElement | 
| affiliationMarketingCategory_recNo | long |  | FKey | affiliationMarketingElement | 
| name | string | 64 | Required | affiliationMarketingElement | 
| id | string | 16 | Required | affiliationMarketingElement | 


