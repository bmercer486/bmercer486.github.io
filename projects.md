---
title: Projects
layout: default
---

<div class="project-grid">
{% for project in site.data.projects %}
  <div class="project-card">
    <img src="{{ project.image }}" class="project-image">
    <div class="project-content">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="links">
        {% for link in project.links %}
          <a href="{{ link.url }}">{{ link.name }}</a>
        {% endfor %}
      </div>
    </div>
  </div>
{% endfor %}
</div>
