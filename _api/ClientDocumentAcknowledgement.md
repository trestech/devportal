---
layout: api_page
title: "ClientDocumentAcknowledgement"
description: ""
assembly_version: "1.4.15.6"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientDocumentAcknowledgement` | 
| `description` | `string` | 128 |  | `clientDocumentAcknowledgement` | 
| `tripName` | `string` | 256 |  | `clientDocumentAcknowledgement` | 
| `advisorProfile_recNo` | `long` |  | ReadOnly, FKey | `clientDocumentAcknowledgement` | 
| `branch_recNo` | `long` |  | ReadOnly, FKey | `clientDocumentAcknowledgement` | 
| `acknowledgementVerbiage` | `string` | 1024 |  | `clientDocumentAcknowledgement` | 
| `clientName` | `string` | 256 |  | `clientDocumentAcknowledgement` | 
| `attachment ` | table |  |  | `clientDocumentAcknowledgement` | 
| `clientDocumentAcknowledgement_recNo` | `long` |  | InsertOnly, FKey | `attachment` | 
| `attachment_recNo` | `long` |  |  | `attachment` | 
| `fileName` | `string` | 256 |  | `attachment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


