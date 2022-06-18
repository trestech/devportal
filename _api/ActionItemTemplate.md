---
layout: page
title: "ActionItemTemplate"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | Key | actionItemTemplate | 
| type | short |  |  | actionItemTemplate | 
| name | string | 64 |  | actionItemTemplate | 
| description | string | 256 |  | actionItemTemplate | 
| enabled | bool |  |  | actionItemTemplate | 
| travelCategory_recNo | short |  |  | actionItemTemplate | 
| actionItemTemplateActionItemLink  | table |  |  |  | 
| actionItemTemplate_recNo | long |  | Key,FKey | actionItemTemplateActionItemLink | 
| actionItem_recNo | long |  | Key,Auto-Assign | actionItemTemplateActionItemLink | 
| actionItemTemplateActionItem  | table |  |  | actionItemTemplate | 
| recNo | long |  | Key,FKey | actionItem | 
| type | short |  | Required | actionItem | 
| description | string | 256 |  | actionItem | 
| triggerIndex | short |  | Required | actionItem | 
| triggerDaysOffset | short |  |  | actionItem | 
| triggerFixedDate | Date |  |  | actionItem | 
| completed | DateTimeOffset |  |  | actionItem | 
| completedBy_appUserRecNo | long |  |  | actionItem | 
| completedBy_appUserId | string | 64 |  | actionItem | 
| notes | string | 256 |  | actionItem | 


