---
layout: api_page
title: "StringCompare"
description: "The StringCompare condition used when searching based on a string value and allow the user to specify how to do the string comparison"
assembly_version: "1.5.6.5"
---

The StringCompare condition used when searching based on a string value and allow the user to specify how to do the string comparison.

Parameter represents the value of the corresponding string parameter; value represents the underlying string value in the database.

| Condition Value | Name | Description |
| --------------- | ---- | ----------- |
| 0 | Ignore | no comparison is done
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
