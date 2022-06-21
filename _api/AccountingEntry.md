---
layout: page
title: "AccountingEntry"
description: "| Column | Type | Size | Flags | Table | Description |"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | accountingEntry | 
| createDate | DateTimeOffset |  |  | accountingEntry | 
| postDate | DateTimeOffset |  |  | accountingEntry | 
| description | string | 512 |  | accountingEntry | 
| accountingReference | string | 64 |  | accountingEntry | 
| accountingEntryDetail  | table |  |  | accountingEntry | 
| recNo | long |  | PKey | accountingEntryDetail | 
| accountingEntry_recNo | long |  | FKey | accountingEntryDetail | 
| description | string | 512 |  | accountingEntryDetail | 
| accountCategory | short |  | Required | accountingEntryDetail | 
| accountNumber | int |  |  | accountingEntryDetail | 
| debitAmount | long |  |  | accountingEntryDetail | 
| creditAmount | long |  |  | accountingEntryDetail | 


