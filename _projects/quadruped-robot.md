---
layout: project
order: 1
title: "12-DOF Quadruped Robot"
description: "An approximately 8 kg quadruped developed from mechanical platform through ROS 2 locomotion control, achieving stable walking and trotting gaits at 0.3 m/s."
date: 2026-08-01
categories: [Robotics, Mechanical Systems, Embedded & Control, Robot Software & Simulation, Systems Integration]
featured: true
featured_image: "/assets/images/projects/quadruped/featured.png"
featured_fit: "contain"
featured_position: "50% 50%"
---

Developed as a Mechatronics R&D project at GiftdMinds, this quadruped is a complete electromechanical system rather than a software-only exercise. I designed and built the 12-DOF, approximately 8 kg platform and developed the locomotion stack that drives it.

## Result

- Stable walking and trotting gaits at **0.3 m/s**.
- **12 actuated degrees of freedom** across four legs.
- ROS 2-based locomotion control running on a **Raspberry Pi 5**.
- Analytic inverse kinematics for real-time leg positioning.

## Locomotion control

I derived an analytic inverse-kinematics solution to convert desired foot positions into joint targets. The ROS 2 control architecture coordinates the four legs, sequences the walking and trotting gaits, and provides a maintainable base for further tuning and higher-level autonomy.

## Systems engineering

The core challenge was making the mechanical platform, actuation, computation, and control behave as one reliable robot. The project involved iterative integration and gait tuning rather than treating the CAD and software as separate deliverables.

## Current development

The platform is an active R&D project. The next stage is continued gait refinement, robustness testing, and expansion of the locomotion stack.
