---
layout: api_page
title: "NewClientTravelerFormDocumentAcknowledgement"
description: ""
assembly_version: "1.8.4.7"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `newClientTravelerFormDocumentAcknowledgement` | 
| `description` | `string` | 512 |  | `newClientTravelerFormDocumentAcknowledgement` | 
| `acknowledgementVerbiage` | `string` | 1024 |  | `newClientTravelerFormDocumentAcknowledgement` | 
| `attachment ` | table |  |  | `newClientTravelerFormDocumentAcknowledgement` | 
| `documentTemplate_recNo` | `long` |  | InsertOnly, FKey | `attachment` | 
| `attachment_recNo` | `long` |  |  | `attachment` | 
| `fileName` | `string` | 256 |  | `attachment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


