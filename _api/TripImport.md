---
layout: api_page
title: "TripImport"
description: ""
---



Permission Areas: TripImport

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | tripImport | 
| type | short |  |  | tripImport | NotSpecified = 0, DirectConnectXML = 1, GDSInterfaceText = 2, ReservationJson = 3
| subType | short |  |  | tripImport | 
| source | string | 64 |  | tripImport | 
| recordLocator | string | 6 |  | tripImport | 
| data | string |  |  | tripImport | 
| status | short |  |  | tripImport | Pending = 1, Imported = 2, Error = 3, Warning = 4
| statusMessage | string | 256 |  | tripImport | 
| advisorProfile_recNo | long |  | FKey | tripImport | 
| advisorProfile_Name | string | 256 | ReadOnly | tripImport | 
| branch_recNo | long |  | FKey | tripImport | 
| branch_name | string | 64 | ReadOnly | tripImport | 
| tripReference | string | 64 |  | tripImport | 
| trip_RecNo | long |  | FKey | tripImport | 


