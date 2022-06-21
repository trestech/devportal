---
layout: page
title: "Affiliation"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | affiliation | 
| name | string | 64 |  | affiliation | 
| affiliationMarketingCategory  | table |  |  | affiliation | 
| affiliation_recNo | long |  | PKey,FKey | affiliationMarketingCategory | 
| recNo | long |  | PKey | affiliationMarketingCategory | 
| name | string | 64 | Required | affiliationMarketingCategory | 
| id | string | 16 |  | affiliationMarketingCategory | 
| affiliationMarketingElement  | table |  |  | affiliationMarketingCategory | 
| recNo | long |  | PKey | affiliationMarketingElement | 
| affiliationMarketingCategory_recNo | long |  | FKey | affiliationMarketingElement | 
| name | string | 64 | Required | affiliationMarketingElement | 
| id | string | 16 | Required | affiliationMarketingElement | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
