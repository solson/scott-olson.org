---
layout: default
title: posts
---

# Posts

{% for post in site.posts %}
  <p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}</a></p>
{% endfor %}
