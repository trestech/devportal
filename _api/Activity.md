---
layout: page
title: "Activity"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | activity | 
| appUser_recNo | long |  | FKey | activity | 
| appUserId | string | 64 | ReadOnly | activity | 
| type | short |  | Required | activity | 
| subType | short |  |  | activity | 
| priority | short |  | Required | activity | 
| targetDateTime | DateTimeOffset |  |  | activity | 
| targetDate | Date |  |  | activity | 
| duration | short |  |  | activity | 
| completionDateTime | DateTimeOffset |  |  | activity | 
| alertDateTime | DateTimeOffset |  |  | activity | 
| alertOffset | int |  |  | activity | 
| subject | string | 64 |  | activity | 
| remarks | string |  |  | activity | 
| promoId | string | 256 |  | activity | 
| promoLink | string | 256 |  | activity | 
| private | bool |  |  | activity | 
| affiliation_recNo | int |  | FKey | activity | 
| affiliationName_lookup | string | 64 | ReadOnly | activity | 
| activityClientProfileLink  | table |  |  | activity | 
| activity_recNo | long |  | PKey,FKey | activityClientProfileLink | 
| profile_recNo | long |  | PKey,Required,FKey | activityClientProfileLink | 
| clientName_lookup | string | 256 | ReadOnly | activityClientProfileLink | 
| clientPhone_lookup | string | 256 | ReadOnly | activityClientProfileLink | 
| clientEmail_lookup | string | 256 | ReadOnly | activityClientProfileLink | 
| activitySupplierProfileLink  | table |  |  | activity | 
| activity_recNo | long |  | PKey,FKey | activitySupplierProfileLink | 
| profile_recNo | long |  | PKey,Required,FKey | activitySupplierProfileLink | 
| supplierName_lookup | string | 256 | ReadOnly | activitySupplierProfileLink | 
| supplierPhone_lookup | string | 256 | ReadOnly | activitySupplierProfileLink | 
| supplierEmail_lookup | string | 256 | ReadOnly | activitySupplierProfileLink | 
| activityPersonLink  | table |  |  | activity | 
| activity_recNo | long |  | PKey,FKey | activityPersonLink | 
| person_recNo | long |  | PKey,Required,FKey | activityPersonLink | 
| personName_lookup | string | 256 | ReadOnly | activityPersonLink | 
| personPhone_lookup | string | 256 | ReadOnly | activityPersonLink | 
| personEmail_lookup | string | 256 | ReadOnly | activityPersonLink | 
| activityTripLink  | table |  |  | activity | 
| activity_recNo | long |  | PKey,FKey | activityTripLink | 
| trip_recNo | long |  | PKey,Required,FKey | activityTripLink | 
| tripName_lookup | string | 256 | ReadOnly | activityTripLink | 
| activityTag  | table |  |  | activity | 
| recNo | long |  | PKey | activityTag | 
| activity_recNo | long |  | FKey | activityTag | 
| tag_recNo | long |  | Required,FKey | activityTag | 
| name | string | 64 | ReadOnly | activityTag | 
| value | string | 1024 |  | activityTag | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
