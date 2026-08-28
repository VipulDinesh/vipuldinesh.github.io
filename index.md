---
layout: default
---

<div class="hero-personal">
  <div class="container">
    <div class="hero-content">
      <div class="hero-info-wrapper">
        <div class="hero-text">
           <h1 class="hero-name">{{ site.author | default: "Your Name" }}</h1>
           <p class="hero-title">Robotics hardware · Mechanical design · Systems integration</p>
        </div>
        
        <div class="hero-actions">
          <a href="{{ '/about/' | relative_url }}" class="btn-secondary">
            About
          </a>
           <a href="mailto:{{ site.email }}" class="btn-secondary">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="projects-showcase">
  <div class="container">
    <div class="section-header">
      <h2>Portfolio</h2>
      <p class="section-subtitle">Robots and precision systems developed from mechanism design through control and validation</p>
    </div>
    
    <div class="projects-grid-featured">
      {% assign published_projects = site.projects | where_exp: "project", "project.published != false" %}
      {% assign featured_projects = published_projects | where: "featured", true | sort: "order" %}
      {% for project in featured_projects limit: 3 %}
        <div class="project-card-featured">
          <div class="project-media">
            {% if project.featured_image %}
              <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title }}" class="project-image"
                style="object-fit: {{ project.featured_fit | default: 'cover' }}; object-position: {{ project.featured_position | default: '50% 50%' }};">
            {% elsif project.models.first %}
              <div class="model-preview-small">
                <model-viewer 
                  src="{{ project.models.first.file | relative_url }}"
                  alt="{{ project.title }}"
                  camera-controls
                  auto-rotate
                  class="preview-model-small">
                </model-viewer>
              </div>
            {% else %}
              <div class="project-placeholder-small">
                <i class="fas fa-robot"></i>
              </div>
            {% endif %}
            
            <div class="project-overlay">
              <a href="{{ project.url | relative_url }}" class="project-link-overlay">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <div class="project-info-featured">
            <div class="project-categories-small">
              {% assign category_limit = 2 %}
              {% for category in project.categories limit:category_limit %}
                <span class="category-tag-small">{{ category | escape }}</span>
              {% endfor %}
              {% assign remaining_category_count = project.categories.size | minus: category_limit %}
              {% if remaining_category_count > 0 %}
                {% assign remaining_categories = project.categories | slice: category_limit, remaining_category_count %}
                <span class="category-tag-small category-more"
                  title="Also: {{ remaining_categories | join: ', ' | escape }}">+{{ remaining_category_count }} more</span>
              {% endif %}
            </div>
            
            <h3 class="project-title-featured">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            
            <p class="project-excerpt-small">{{ project.description | truncate: 80 }}</p>
            
            <div class="project-features-small">
              {% if project.models %}
                <span class="feature-badge-small" title="3D Models">
                  <i class="fas fa-cube"></i>
                  {{ project.models.size }} models
                </span>
              {% endif %}
              
              {% if project.schematics %}
                <span class="feature-badge-small" title="Schematics">
                  <i class="fas fa-microchip"></i>
                  {{ project.schematics.size }} schematics
                </span>
              {% endif %}
              
              {% if project.code_files %}
                <span class="feature-badge-small" title="Code Files">
                  <i class="fas fa-code"></i>
                  {{ project.code_files.size }} code files
                </span>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    
    <div class="showcase-actions">
      <a href="{{ '/projects/' | relative_url }}" class="btn-primary-large">
        <i class="fas fa-th"></i>
        View All Projects
      </a>
    </div>
  </div>
</div>

<div class="skills-section">
  <div class="container">
    <div class="skills-content">
      <h2>Technical Expertise</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3><i class="fas fa-drafting-compass"></i> Mechanical Design &amp; CAD</h3>
          <div class="skill-tags">
            <span class="skill-tag">SolidWorks</span>
            <span class="skill-tag">Fusion 360</span>
            <span class="skill-tag">Creo</span>
            <span class="skill-tag">ANSYS</span>
            <span class="skill-tag">FEA</span>
            <span class="skill-tag">Mechanism Design</span>
            <span class="skill-tag">Transmission Design</span>
            <span class="skill-tag">Tolerance Analysis</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-microchip"></i> Embedded &amp; Electronics</h3>
          <div class="skill-tags">
            <span class="skill-tag">ESP32</span>
            <span class="skill-tag">STM32</span>
            <span class="skill-tag">Raspberry Pi</span>
            <span class="skill-tag">Motor Drivers</span>
            <span class="skill-tag">IMUs</span>
            <span class="skill-tag">Encoders</span>
            <span class="skill-tag">LiDAR</span>
            <span class="skill-tag">I²C</span>
            <span class="skill-tag">SPI</span>
            <span class="skill-tag">UART</span>
            <span class="skill-tag">CAN</span>
            <span class="skill-tag">Power Systems</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-robot"></i> Robotics &amp; Control</h3>
          <div class="skill-tags">
            <span class="skill-tag">ROS 2</span>
            <span class="skill-tag">Gazebo</span>
            <span class="skill-tag">RViz</span>
            <span class="skill-tag">Nav2</span>
            <span class="skill-tag">Kinematics</span>
            <span class="skill-tag">Inverse Kinematics</span>
            <span class="skill-tag">PID Control</span>
            <span class="skill-tag">Motion Control</span>
            <span class="skill-tag">Motor Sizing</span>
            <span class="skill-tag">Actuator Sizing</span>
            <span class="skill-tag">Stepper Control</span>
            <span class="skill-tag">Servo Control</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-code"></i> Software &amp; Engineering Tools</h3>
          <div class="skill-tags">
            <span class="skill-tag">C</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">MATLAB</span>
            <span class="skill-tag">Simulink</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">Hamlib</span>
            <span class="skill-tag">GPredict</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-industry"></i> Manufacturing &amp; Validation</h3>
          <div class="skill-tags">
            <span class="skill-tag">FDM 3D Printing</span>
            <span class="skill-tag">CAM</span>
            <span class="skill-tag">Rapid Prototyping</span>
            <span class="skill-tag">Mechanical Assembly</span>
            <span class="skill-tag">System Integration</span>
            <span class="skill-tag">TVAC Testing</span>
            <span class="skill-tag">Vibration Testing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
