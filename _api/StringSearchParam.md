---
layout: api_page
title: "StringSearchParam"
description: "Parameter represents the value of the corresponding string parameter; value represents the underlying string value in the database"
assembly_version: "1.0.25.7"
---


Parameter represents the value of the corresponding string parameter; value represents the underlying string value in the database.

| Condition Value | Name | Description |
| --------------- | ---- | ----------- |
| 1 | Equal | parameter and value must be the same (case-insensitive)
| 2 | NotEqual | parameter and value must not be the same (case-insensitive)
| 3 | Blank | value is blank or null
| 4 | NotBlank | value is not blank or null
| 5 | StartingWith | value starts with parameter (case-insensitive)
| 6 | Contains | parameter matches anywhere within value (case-insensitive)
| 7 | In | value matches one of the values specified by paramater (ncomma-separated, case-insensitive)
| 8 | NotIn | value does not match any of the values specified by paramater (comma-separated, case-insensitive)
| 9 | NotStartingWith | value does not start with parameter (case-insensitive)
| 10 | NotContaining | parameter does not match anywhere within value (case-insensitive)
