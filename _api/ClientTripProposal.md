---
layout: api_page
title: "ClientTripProposal"
description: ""
assembly_version: "1.0.32.1"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientTripProposal` | 
| `tripName` | `string` | 256 |  | `clientTripProposal` | 
| `advisorProfile_recNo` | `long` |  | FKey | `clientTripProposal` | 
| `tripStartDateTime` | `DateTime` |  |  | `clientTripProposal` | 
| `tripEndDateTime` | `DateTime` |  |  | `clientTripProposal` | 
| `tripClientName` | `string` | 256 |  | `clientTripProposal` | 
| `remarks` | `string` |  |  | `clientTripProposal` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


