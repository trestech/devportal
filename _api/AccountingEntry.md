---
layout: page
title: "AccountingEntry"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | Key | accountingEntry | 
| createDate | DateTimeOffset |  |  | accountingEntry | 
| postDate | DateTimeOffset |  |  | accountingEntry | 
| description | string | 512 |  | accountingEntry | 
| accountingReference | string | 64 |  | accountingEntry | 
| accountingEntryDetail  | table |  |  |  | 
| recNo | long |  | Key | accountingEntryDetail | 
| accountingEntry_recNo | long |  | FKey | accountingEntryDetail | 
| description | string | 512 |  | accountingEntryDetail | 
| accountCategory | short |  | Required | accountingEntryDetail | 
| accountNumber | int |  |  | accountingEntryDetail | 
| debitAmount | long |  |  | accountingEntryDetail | 
| creditAmount | long |  |  | accountingEntryDetail | 


