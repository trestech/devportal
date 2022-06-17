---
layout: page
title: API
permalink: /api/
---

<table>
{%- for post in site.api -%}
  <tr>
    <th style="padding: 4px;">
      <a class="post-link" href="{{ post.url | relative_url }}" style="font-size: 11px;">
        {{ post.title | escape }}
      </a>
    </th>
    <td style="padding: 4px;">
      <span style="font-size: 11px;">{{ post.description | escape }}</span>
    </td>
  </tr>
{%- endfor -%}
</table>
