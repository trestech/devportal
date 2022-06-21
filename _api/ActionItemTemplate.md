---
layout: page
title: "ActionItemTemplate"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | actionItemTemplate | 
| type | short |  |  | actionItemTemplate | 
| name | string | 64 |  | actionItemTemplate | 
| description | string | 256 |  | actionItemTemplate | 
| enabled | bool |  |  | actionItemTemplate | 
| travelCategory_recNo | short |  |  | actionItemTemplate | 
| actionItemTemplateActionItemLink  | table |  |  | actionItemTemplate | 
| actionItemTemplate_recNo | long |  | PKey,FKey | actionItemTemplateActionItemLink | 
| actionItem_recNo | long |  | PKey,Auto-Assign | actionItemTemplateActionItemLink | 
| actionItemTemplateActionItem  | table |  |  | actionItemTemplateActionItemLink | 
| recNo | long |  | PKey,FKey | actionItem | 
| type | short |  | Required | actionItem | 
| description | string | 256 |  | actionItem | 
| triggerIndex | short |  | Required | actionItem | 
| triggerDaysOffset | short |  |  | actionItem | 
| triggerFixedDate | Date |  |  | actionItem | 
| completed | DateTimeOffset |  |  | actionItem | 
| completedBy_appUserRecNo | long |  |  | actionItem | 
| completedBy_appUserId | string | 64 |  | actionItem | 
| notes | string | 256 |  | actionItem | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
