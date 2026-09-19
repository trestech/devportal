---
layout: api_page
title: "TripRemarks"
description: ""
assembly_version: "1.8.1.5"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `tripRemarks` | 
| `trip_recNo` | `long` |  | PKey | `tripRemarks` | 
| `remarks` | `string` |  | Required | `tripRemarks` | 
| `viewOptions` | `int` |  | Required | `tripRemarks` | None = 0, TripStatementFooter = 1, SupplierStatementFooter = 2, TripProposalHeader = 4, TripProposalSummary = 8, TripProposalFooter = 16, ClientItinHeader = 32

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


