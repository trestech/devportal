---
layout: api_page
title: "ReservationRemarks"
description: ""
assembly_version: "1.8.1.5"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `reservationRemarks` | 
| `reservation_recNo` | `long` |  | PKey | `reservationRemarks` | 
| `remarks` | `string` |  | Required | `reservationRemarks` | 
| `viewOptions` | `int` |  | Required | `reservationRemarks` | None = 0, TripProposal = 1, ClientItinerary = 2, TripStatement = 4

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


