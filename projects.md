---
title: Projects
layout: default
---

<h2>Engineering Education</h2>

<div class="project-grid">
{% for project in site.data.projects %}
  {% if project.category == "education" %}
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
  {% endif %}
{% endfor %}
</div>


<h2>Research Projects and Technical Work</h2>

<div class="project-grid">
{% for project in site.data.projects %}
  {% if project.category == "technical" %}
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
  {% endif %}
{% endfor %}
</div>