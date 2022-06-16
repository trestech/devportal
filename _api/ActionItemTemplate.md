---
layout: post
---

﻿# ActionItemTemplate


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | actionItemTemplate | 
| type | short |  | {string.Join(',', flags)} | actionItemTemplate | 
| name | string | 64 | {string.Join(',', flags)} | actionItemTemplate | 
| description | string | 256 | {string.Join(',', flags)} | actionItemTemplate | 
| enabled | bool |  | {string.Join(',', flags)} | actionItemTemplate | 
| travelCategory_recNo | short |  | {string.Join(',', flags)} | actionItemTemplate | 
| actionItemTemplateActionItemLink  | table |  |  |  | 
| actionItemTemplate_recNo | long |  | {string.Join(',', flags)} | actionItemTemplateActionItemLink | 
| actionItem_recNo | long |  | {string.Join(',', flags)} | actionItemTemplateActionItemLink | 
| actionItemTemplateActionItem  | table |  |  | actionItemTemplate | 
| recNo | long |  | {string.Join(',', flags)} | actionItem | 
| type | short |  | {string.Join(',', flags)} | actionItem | 
| description | string | 256 | {string.Join(',', flags)} | actionItem | 
| triggerIndex | short |  | {string.Join(',', flags)} | actionItem | 
| triggerDaysOffset | short |  | {string.Join(',', flags)} | actionItem | 
| triggerFixedDate | Date |  | {string.Join(',', flags)} | actionItem | 
| completed | DateTimeOffset |  | {string.Join(',', flags)} | actionItem | 
| completedBy_appUserRecNo | long |  | {string.Join(',', flags)} | actionItem | 
| completedBy_appUserId | string | 64 | {string.Join(',', flags)} | actionItem | 
| notes | string | 256 | {string.Join(',', flags)} | actionItem | 
