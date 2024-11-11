---
layout: api_page
title: "ActionItemTemplate"
description: ""
assembly_version: "1.4.4.3"
---



Permission Areas: ActionItemTemplate

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `actionItemTemplate` | 
| `type` | `short` |  | Required | `actionItemTemplate` | Trip = 1, ClientProfile = 2, Person = 3
| `name` | `string` | 128 | Required | `actionItemTemplate` | 
| `description` | `string` | 256 |  | `actionItemTemplate` | 
| `enabled` | `bool` |  |  | `actionItemTemplate` | 
| `travelCategory_recNo` | `short` |  |  | `actionItemTemplate` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `appUser_recNo` | `long` |  | FKey | `actionItemTemplate` | 
| `appUser_id` | `string` | 64 | ReadOnly, Lookup | `actionItemTemplate` | 
| `actionItemTemplateActionItemLink ` | table |  |  | `actionItemTemplate` | 
| `actionItemTemplate_recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItemTemplateActionItemLink` | 
| `dateExpression` | `string` | 32 |  | `actionItemTemplateActionItemLink` | 
| `actionItem_recNo` | `long` |  | PKey, Auto-Assign | `actionItemTemplateActionItemLink` | 
| `actionItemTemplateActionItem ` | table |  | Singleton | `actionItemTemplateActionItemLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItem` | 
| `type` | `short` |  | Deprecated | `actionItem` | Not needed
| `description` | `string` | 256 |  | `actionItem` | 
| `triggerIndex` | `short` |  | Required | `actionItem` | 
| `triggerDaysOffset` | `short` |  |  | `actionItem` | 
| `triggerFixedDate` | `Date` |  |  | `actionItem` | 
| `appUser_recNo` | `long` |  |  | `actionItem` | 
| `appUserId` | `string` | 64 | ReadOnly, Lookup | `actionItem` | 
| `completed` | `DateTimeOffset` |  |  | `actionItem` | 
| `completedBy_appUserRecNo` | `long` |  |  | `actionItem` | 
| `completedBy_appUserId` | `string` | 64 | ReadOnly, Lookup | `actionItem` | 
| `notes` | `string` |  |  | `actionItem` | 
| `documentTemplate_recNo` | `long` |  | FKey | `actionItem` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


