---
layout: api_page
title: "ActivitySearch"
description: ""
---



Referenced Table: [Activity]({{ '/api/Activity.html' | relative_url }})

Permission Areas: Activity

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | activity | 
| tagValue | string | 1024 | activity | 
| summaryCount | int |  | activity | 
| type | short |  | activity | Task = 1, Appointment = 2, Note = 3, Promo = 4
| appUser_recNo | long |  | activity | 
| appUserId | string | 64 | activity | 
| subject | string | 64 | activity | 
| priority | short |  | activity | Low = 1, Medium = 2, High = 3
| targetDateTime | DateTimeOffset |  | activity | 
| targetDate | Date |  | activity | 
| completionDateTime | DateTime |  | activity | 
| clientProfileRecNo | long |  | activity | 
| clientProfileName | string | 256 | activity | 
| supplierProfileRecNo | long |  | activity | 
| supplierProfileName | string | 256 | activity | 
| personRecNo | long |  | activity | 
| personName | string | 256 | activity | 
| tripRecNo | long |  | activity | 
| tripName | string | 256 | activity | 
| createDateTime | DateTimeOffset |  | activity | 
| remarks | string |  | activity | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| tagRecNo [inherited] | long[] |  | 
| tagValue [inherited] | string |  | 
| tagValueCond [inherited] | short | tagValue | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| appUserRecNo | long |  | 
| type | short[] |  | Task = 1, Appointment = 2, Note = 3, Promo = 4
| targetDateFrom | Date |  | 
| targetDateTo | Date |  | 
| targetDateTimeFrom | Date |  | 
| targetDateTimeTo | Date |  | 
| completed | bool |  | 
| clientProfileRecNo | long |  | 
| supplierProfileRecNo | long |  | 
| personRecNo | long |  | 
| tripRecNo | long |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


