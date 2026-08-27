---
layout: default
title: About
description: "About Vipul Dinesh, a Mechatronics Engineering student building robot software, simulations, and control interfaces."
permalink: /about/
---

<div class="about-hero">
  <div class="container about-hero-grid">
    <div>
      <p class="about-eyebrow">About</p>
      <h1>I build at the intersection of mechanisms, electronics, and software.</h1>
      <p class="about-intro">I'm Vipul Dinesh, a B.Tech Mechatronics Engineering student at Manipal Institute of Technology. My work focuses on turning robot concepts into systems that can be modeled, simulated, controlled, and operated.</p>
      <div class="about-actions">
        <a class="btn-primary" href="{{ '/projects/' | relative_url }}">Explore my work</a>
        <a class="btn-secondary" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn-secondary" href="mailto:{{ site.email }}">Email me</a>
      </div>
    </div>
    <aside class="about-focus-card" aria-label="Current focus">
      <p class="about-card-label">Current focus</p>
      <ul>
        <li><span>01</span> ROS 2 robot software</li>
        <li><span>02</span> Gazebo simulation</li>
        <li><span>03</span> Motion and gait control</li>
        <li><span>04</span> Operator interfaces</li>
      </ul>
    </aside>
  </div>
</div>

<div class="about-content-personal">
  <div class="container">
    <section class="about-story-grid">
      <div>
        <p class="about-eyebrow">Approach</p>
        <h2>From model to motion</h2>
      </div>
      <div class="about-copy">
        <p>I enjoy the full robotics workflow: defining a robot in URDF and Xacro, building simulation environments, writing ROS 2 nodes, and creating the controls that make the system useful to an operator.</p>
        <p>This portfolio documents the engineering behind that work—not just the final result. Each project highlights the architecture, tools, implementation decisions, and next steps.</p>
      </div>
    </section>

    <section class="about-toolkit">
      <p class="about-eyebrow">Toolkit</p>
      <div class="about-tool-grid">
        <article><i class="fas fa-robot"></i><h3>Robot software</h3><p>ROS 2 packages, nodes, launch systems, URDF, and Xacro.</p></article>
        <article><i class="fas fa-cubes"></i><h3>Simulation</h3><p>Gazebo worlds, RViz visualization, and repeatable virtual testing.</p></article>
        <article><i class="fas fa-code"></i><h3>Programming</h3><p>Python tooling, control logic, and PyGame-based interfaces.</p></article>
        <article><i class="fas fa-gears"></i><h3>Mechatronics</h3><p>System-level thinking across mechanisms, sensing, actuation, and software.</p></article>
      </div>
    </section>

    <section class="about-contact-band">
      <div>
        <p class="about-eyebrow">Let's connect</p>
        <h2>Interested in robotics, simulation, or mechatronics?</h2>
      </div>
      <a class="btn-primary" href="https://www.linkedin.com/in/{{ site.linkedin_username }}/" target="_blank" rel="noopener">Connect on LinkedIn</a>
    </section>
  </div>
</div>
