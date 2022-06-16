---
layout: post
---

﻿# Activity


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | activity | 
| appUser_recNo | long |  | {string.Join(',', flags)} | activity | 
| appUserId | string | 64 | {string.Join(',', flags)} | activity | 
| type | short |  | {string.Join(',', flags)} | activity | 
| subType | short |  | {string.Join(',', flags)} | activity | 
| priority | short |  | {string.Join(',', flags)} | activity | 
| targetDateTime | DateTimeOffset |  | {string.Join(',', flags)} | activity | 
| targetDate | Date |  | {string.Join(',', flags)} | activity | 
| duration | short |  | {string.Join(',', flags)} | activity | 
| completionDateTime | DateTimeOffset |  | {string.Join(',', flags)} | activity | 
| alertDateTime | DateTimeOffset |  | {string.Join(',', flags)} | activity | 
| alertOffset | int |  | {string.Join(',', flags)} | activity | 
| subject | string | 64 | {string.Join(',', flags)} | activity | 
| remarks | string |  | {string.Join(',', flags)} | activity | 
| promoId | string | 256 | {string.Join(',', flags)} | activity | 
| promoLink | string | 256 | {string.Join(',', flags)} | activity | 
| private | bool |  | {string.Join(',', flags)} | activity | 
| affiliation_recNo | int |  | {string.Join(',', flags)} | activity | 
| affiliationName_lookup | string | 64 | {string.Join(',', flags)} | activity | 
| activityClientProfileLink  | table |  |  |  | 
| activity_recNo | long |  | {string.Join(',', flags)} | activityClientProfileLink | 
| profile_recNo | long |  | {string.Join(',', flags)} | activityClientProfileLink | 
| clientName_lookup | string | 256 | {string.Join(',', flags)} | activityClientProfileLink | 
| clientPhone_lookup | string | 256 | {string.Join(',', flags)} | activityClientProfileLink | 
| clientEmail_lookup | string | 256 | {string.Join(',', flags)} | activityClientProfileLink | 
| activitySupplierProfileLink  | table |  |  |  | 
| activity_recNo | long |  | {string.Join(',', flags)} | activitySupplierProfileLink | 
| profile_recNo | long |  | {string.Join(',', flags)} | activitySupplierProfileLink | 
| supplierName_lookup | string | 256 | {string.Join(',', flags)} | activitySupplierProfileLink | 
| supplierPhone_lookup | string | 256 | {string.Join(',', flags)} | activitySupplierProfileLink | 
| supplierEmail_lookup | string | 256 | {string.Join(',', flags)} | activitySupplierProfileLink | 
| activityPersonLink  | table |  |  |  | 
| activity_recNo | long |  | {string.Join(',', flags)} | activityPersonLink | 
| person_recNo | long |  | {string.Join(',', flags)} | activityPersonLink | 
| personName_lookup | string | 256 | {string.Join(',', flags)} | activityPersonLink | 
| personPhone_lookup | string | 256 | {string.Join(',', flags)} | activityPersonLink | 
| personEmail_lookup | string | 256 | {string.Join(',', flags)} | activityPersonLink | 
| activityTripLink  | table |  |  |  | 
| activity_recNo | long |  | {string.Join(',', flags)} | activityTripLink | 
| trip_recNo | long |  | {string.Join(',', flags)} | activityTripLink | 
| tripName_lookup | string | 256 | {string.Join(',', flags)} | activityTripLink | 
| activityTag  | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | activityTag | 
| activity_recNo | long |  | {string.Join(',', flags)} | activityTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | activityTag | 
| name | string | 64 | {string.Join(',', flags)} | activityTag | 
| value | string | 1024 | {string.Join(',', flags)} | activityTag | 
