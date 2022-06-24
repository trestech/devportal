---
layout: api_page
title: "ActionItemTemplate"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | actionItemTemplate | 
| type | short |  |  | actionItemTemplate | Trip = 1, TripTemplate = 2
| name | string | 64 |  | actionItemTemplate | 
| description | string | 256 |  | actionItemTemplate | 
| enabled | bool |  |  | actionItemTemplate | 
| travelCategory_recNo | short |  |  | actionItemTemplate | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| actionItemTemplateActionItemLink  | table |  |  | actionItemTemplate | 
| actionItemTemplate_recNo | long |  | PKey,FKey | actionItemTemplateActionItemLink | 
| actionItem_recNo | long |  | PKey,Auto-Assign | actionItemTemplateActionItemLink | 
| actionItemTemplateActionItem  | table |  |  | actionItemTemplateActionItemLink | 
| recNo | long |  | PKey,FKey | actionItem | 
| type | short |  | Required | actionItem | Trip = 1, TripTemplate = 2
| description | string | 256 |  | actionItem | 
| triggerIndex | short |  | Required | actionItem | FixedDate = 1, StartDate = 2, EndDate = 3, TargetTravelDate = 4
| triggerDaysOffset | short |  |  | actionItem | 
| triggerFixedDate | Date |  |  | actionItem | 
| completed | DateTimeOffset |  |  | actionItem | 
| completedBy_appUserRecNo | long |  |  | actionItem | 
| completedBy_appUserId | string | 64 |  | actionItem | 
| notes | string | 256 |  | actionItem | 


