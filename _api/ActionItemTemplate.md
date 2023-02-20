---
layout: api_page
title: "ActionItemTemplate"
description: ""
---



Permission Areas: ActionItemTemplate

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `actionItemTemplate` | 
| `type` | `short` |  |  | `actionItemTemplate` | Trip = 1, TripTemplate = 2
| `name` | `string` | 64 |  | `actionItemTemplate` | 
| `description` | `string` | 256 |  | `actionItemTemplate` | 
| `enabled` | `bool` |  |  | `actionItemTemplate` | 
| `travelCategory_recNo` | `short` |  |  | `actionItemTemplate` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `actionItemTemplateActionItemLink ` | table |  |  | `actionItemTemplate` | 
| `actionItemTemplate_recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItemTemplateActionItemLink` | 
| `actionItem_recNo` | `long` |  | PKey, Auto-Assign | `actionItemTemplateActionItemLink` | 
| `actionItemTemplateActionItem ` | table |  | Singleton | `actionItemTemplateActionItemLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItem` | 
| `type` | `short` |  | Required | `actionItem` | Trip = 1, TripTemplate = 2
| `description` | `string` | 256 |  | `actionItem` | 
| `triggerIndex` | `short` |  | Required | `actionItem` | FixedDate = 1, StartDate = 2, EndDate = 3, TargetTravelDate = 4, CreateDate = 5, EarliestBookingDate = 6, EarliestDepositDate = 7, EarliestFinalPayDate = 8
| `triggerDaysOffset` | `short` |  |  | `actionItem` | 
| `triggerFixedDate` | `Date` |  |  | `actionItem` | 
| `appUser_recNo` | `long` |  |  | `actionItem` | 
| `appUserId` | `string` | 64 | ReadOnly | `actionItem` | 
| `completed` | `DateTimeOffset` |  |  | `actionItem` | 
| `completedBy_appUserRecNo` | `long` |  |  | `actionItem` | 
| `completedBy_appUserId` | `string` | 64 | ReadOnly | `actionItem` | 
| `notes` | `string` | 256 |  | `actionItem` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


