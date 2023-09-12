---
layout: api_page
title: "NumSearchParam"
description: "The NumCompare condition is used when searching based on a numeric value and allow the user to specify how to do the numeric comparison"
assembly_version: "1.0.24.1"
---


The NumCompare condition is used when searching based on a numeric value and allow the user to specify how to do the numeric comparison.

Parameter represents the value of the corresponding numeric parameter; value represents the underlying numeric value in the database.

| Condition Value | Name | Description |
| --------------- | ---- | ----------- |
| 0 | Ignore | no comparison is done (parameter is ignored)
| 1 | Equal | parameter and value must be the same
| 2 | NotEqual | parameter and value must not be the same
| 3 | Blank | value is null
| 4 | NotBlank | value is not null
