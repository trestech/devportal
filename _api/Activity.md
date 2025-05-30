---
layout: api_page
title: "Activity"
description: ""
assembly_version: "1.4.15.6"
---



Permission Areas: Activity

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `activity` | 
| `appUser_recNo` | `long` |  | FKey | `activity` | 
| `appUserId` | `string` | 64 | ReadOnly, Lookup | `activity` | 
| `type` | `short` |  | Required | `activity` | Task = 1, Appointment = 2, Note = 3, Promo = 4
| `subType` | `short` |  |  | `activity` | 
| `priority` | `short` |  | Required | `activity` | Low = 1, Medium = 2, High = 3
| `targetDateTime` | `DateTimeOffset` |  |  | `activity` | 
| `targetDate` | `Date` |  |  | `activity` | 
| `duration` | `short` |  |  | `activity` | 
| `completionDateTime` | `DateTimeOffset` |  |  | `activity` | 
| `alertDateTime` | `DateTimeOffset` |  |  | `activity` | 
| `alertOffset` | `int` |  |  | `activity` | 
| `subject` | `string` | 64 |  | `activity` | 
| `remarks` | `string` |  |  | `activity` | 
| `promoId` | `string` | 256 |  | `activity` | 
| `promoLink` | `string` | 256 |  | `activity` | 
| `private` | `bool` |  |  | `activity` | 
| `affiliation_recNo` | `int` |  | FKey | `activity` | 
| `affiliationName_lookup` | `string` | 64 | ReadOnly | `activity` | 
| `activityClientProfileLink ` | table |  | Singleton | `activity` | 
| `activity_recNo` | `long` |  | PKey, InsertOnly, FKey | `activityClientProfileLink` | 
| `profile_recNo` | `long` |  | PKey, Required, FKey | `activityClientProfileLink` | 
| `clientName_lookup` | `string` | 256 | ReadOnly, Lookup | `activityClientProfileLink` | 
| `clientPhone_lookup` | `string` | 256 | ReadOnly, Lookup | `activityClientProfileLink` | 
| `clientEmail_lookup` | `string` | 256 | ReadOnly, Lookup | `activityClientProfileLink` | 
| `activitySupplierProfileLink ` | table |  | Singleton | `activity` | 
| `activity_recNo` | `long` |  | PKey, InsertOnly, FKey | `activitySupplierProfileLink` | 
| `profile_recNo` | `long` |  | PKey, Required, FKey | `activitySupplierProfileLink` | 
| `supplierName_lookup` | `string` | 256 | ReadOnly, Lookup | `activitySupplierProfileLink` | 
| `supplierPhone_lookup` | `string` | 256 | ReadOnly, Lookup | `activitySupplierProfileLink` | 
| `supplierEmail_lookup` | `string` | 256 | ReadOnly, Lookup | `activitySupplierProfileLink` | 
| `activityPersonLink ` | table |  | Singleton | `activity` | 
| `activity_recNo` | `long` |  | PKey, InsertOnly, FKey | `activityPersonLink` | 
| `person_recNo` | `long` |  | PKey, Required, FKey | `activityPersonLink` | 
| `personName_lookup` | `string` | 256 | ReadOnly, Lookup | `activityPersonLink` | 
| `personPhone_lookup` | `string` | 256 | ReadOnly, Lookup | `activityPersonLink` | 
| `personEmail_lookup` | `string` | 256 | ReadOnly, Lookup | `activityPersonLink` | 
| `activityTripLink ` | table |  | Singleton | `activity` | 
| `activity_recNo` | `long` |  | PKey, InsertOnly, FKey | `activityTripLink` | 
| `trip_recNo` | `long` |  | PKey, Required, FKey | `activityTripLink` | 
| `tripName_lookup` | `string` | 256 | ReadOnly, Lookup | `activityTripLink` | 
| `activityTag ` | table |  |  | `activity` | 
| `recNo` | `long` |  | PKey | `activityTag` | 
| `activity_recNo` | `long` |  | InsertOnly, FKey | `activityTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `activityTag` | 
| `name` | `string` | 64 | ReadOnly | `activityTag` | 
| `value` | `string` | 1024 |  | `activityTag` | 
| `activityHistory ` | table |  |  | `activity` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `history` | 
| `timestamp` | `DateTimeOffset` |  |  | `history` | 
| `action` | `string` | 64 |  | `history` | 
| `tableName` | `string` | 64 |  | `history` | 
| `tableRecNo` | `long` |  |  | `history` | 
| `tableRecNo2` | `long` |  |  | `history` | 
| `columnName` | `string` | 64 |  | `history` | 
| `description` | `string` | 256 |  | `history` | 
| `oldValue` | `string` | 256 |  | `history` | 
| `newValue` | `string` | 256 |  | `history` | 
| `token_recNo` | `long` |  |  | `history` | 
| `clientIPAddress` | `string` | 16 |  | `history` | 
| `errorCode` | `int` |  |  | `history` | 
| `appUser_recNo` | `long` |  |  | `history` | 
| `appUser_id` | `string` | 64 |  | `history` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


