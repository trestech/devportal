---
layout: api_page
title: "ClientDocumentAcknowledgementClientProfile"
description: ""
assembly_version: "1.7.7.1"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientDocumentAcknowledgementClientProfile` | 
| `description` | `string` | 128 |  | `clientDocumentAcknowledgementClientProfile` | 
| `advisorProfile_recNo` | `long` |  | ReadOnly, FKey | `clientDocumentAcknowledgementClientProfile` | 
| `branch_recNo` | `long` |  | ReadOnly, FKey | `clientDocumentAcknowledgementClientProfile` | 
| `acknowledgementVerbiage` | `string` | 1024 |  | `clientDocumentAcknowledgementClientProfile` | 
| `clientName` | `string` | 256 |  | `clientDocumentAcknowledgementClientProfile` | 
| `status` | `short` |  |  | `clientDocumentAcknowledgementClientProfile` | Pending = 1, Acknowledged = 2, Expired = 3
| `attachment ` | table |  |  | `clientDocumentAcknowledgementClientProfile` | 
| `documentAcknowledgement_recNo` | `long` |  | InsertOnly, FKey | `attachment` | 
| `attachment_recNo` | `long` |  |  | `attachment` | 
| `fileName` | `string` | 256 |  | `attachment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


