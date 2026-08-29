---
title: "12-DOF Quadruped Robot"
order: 1
featured: true
description: "A 5 kg quadruped developed from mechanical platform through ROS 2 locomotion control, achieving stable walking and trotting gaits at 0.3 m/s."
organization: "GiftdMinds"
role: "Mechanical design, integration, and locomotion control"
period: "December 2025 – July 2026"
image: "/assets/images/projects/quadruped/featured.webp"
imageAlt: "Front view of the completed 12-DOF quadruped robot"
demoUrl: "https://youtu.be/uoGV0OVlEwQ"
metrics:
  - "12 actuated DOF"
  - "5 kg"
  - "0.3 m/s walking and trotting"
  - "Raspberry Pi 5 + ROS 2"
technologies:
  - "ROS 2"
  - "Raspberry Pi 5"
  - "Analytic inverse kinematics"
  - "Mechanical design"
  - "Locomotion control"
  - "Nav2"
  - "SLAM"
---

## Engineering objective

Develop a 5 kg quadruped platform covering mechanical design, actuation, onboard computation, and ROS 2 locomotion control.

## My contribution

I designed and built the 12-DOF, 5 kg mechanical platform and developed the locomotion stack that drives it. My work covered mechanical architecture, integration, analytic inverse kinematics, ROS 2 control, gait sequencing, and iterative physical tuning.

## Locomotion approach

I derived an analytic inverse-kinematics solution that converts desired foot positions into real-time joint targets. The control architecture coordinates four legs, generates pose commands, and sequences walking and trotting gaits on a Raspberry Pi 5.

Physical testing required the mechanical offsets, actuator behaviour, frame conventions, gait timing, and ground contact assumptions to match the implemented control model.

## Validated result

- Stable walking and trotting at **0.3 m/s**.
- Twelve independently actuated joints across four legs.
- Real-time analytic leg positioning through ROS 2.
- Demonstrated pose control, operator control, Nav2, and SLAM capability.

## Demonstrations

### Platform, interface, gaits, and poses

<div class="video-frame">
  <iframe src="https://www.youtube-nocookie.com/embed/uoGV0OVlEwQ" title="Quadruped platform, interface, gait and pose demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Nav2 and SLAM

<div class="video-frame">
  <iframe src="https://www.youtube-nocookie.com/embed/JoXvKUSXJ1A" title="Quadruped Nav2 and SLAM demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Current development

The platform remains an active R&D project. Current work focuses on gait refinement, repeatability, robustness testing, and extending the locomotion stack toward higher-level autonomy.
