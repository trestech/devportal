---
layout: post
---

﻿# AccountingEntry


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | accountingEntry | 
| createDate | DateTimeOffset |  | {string.Join(',', flags)} | accountingEntry | 
| postDate | DateTimeOffset |  | {string.Join(',', flags)} | accountingEntry | 
| description | string | 512 | {string.Join(',', flags)} | accountingEntry | 
| accountingReference | string | 64 | {string.Join(',', flags)} | accountingEntry | 
| accountingEntryDetail  | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | accountingEntryDetail | 
| accountingEntry_recNo | long |  | {string.Join(',', flags)} | accountingEntryDetail | 
| description | string | 512 | {string.Join(',', flags)} | accountingEntryDetail | 
| accountCategory | short |  | {string.Join(',', flags)} | accountingEntryDetail | 
| accountNumber | int |  | {string.Join(',', flags)} | accountingEntryDetail | 
| debitAmount | long |  | {string.Join(',', flags)} | accountingEntryDetail | 
| creditAmount | long |  | {string.Join(',', flags)} | accountingEntryDetail | 
