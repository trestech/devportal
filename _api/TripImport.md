---
layout: page
title: "TripImport"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | tripImport | 
| type | short |  |  | tripImport | 
| subType | short |  |  | tripImport | 
| source | string | 64 |  | tripImport | 
| recordLocator | string | 6 |  | tripImport | 
| data | string |  |  | tripImport | 
| status | short |  |  | tripImport | 
| statusMessage | string | 256 |  | tripImport | 
| advisorProfile_recNo | long |  | FKey | tripImport | 
| advisorProfile_Name | string | 256 | ReadOnly | tripImport | 
| branch_recNo | long |  | FKey | tripImport | 
| branch_name | string | 64 | ReadOnly | tripImport | 
| tripReference | string | 64 |  | tripImport | 
| trip_RecNo | long |  | FKey | tripImport | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
