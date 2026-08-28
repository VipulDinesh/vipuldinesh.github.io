---
title: "RHex Hexapod Simulation"
order: 5
featured: false
description: "A ROS 2 Jazzy and Gazebo Harmonic simulation of an RHex-style six-legged robot with modular packages, simulated terrain, teleoperation, and tripod gait control."
organization: "Independent project"
role: "ROS 2 simulation and control"
period: "2025"
image: "/assets/images/projects/rhex/featured.webp"
imageAlt: "RHex simulation running in Gazebo"
demoUrl: "https://youtu.be/xTXKbNmbx6I"
githubUrl: "https://github.com/VipulDinesh/RHex_ROS2"
metrics:
  - "6 simulated legs"
  - "3 modular ROS 2 packages"
  - "Tripod gait"
  - "Multiple terrain environments"
technologies:
  - "ROS 2 Jazzy"
  - "Gazebo Harmonic"
  - "URDF/Xacro"
  - "ros2_control"
  - "Python"
  - "RViz"
---

## Architecture

The workspace separates the robot into three focused ROS 2 packages: `rhex_description` for the model, `rhex_gazebo` for simulation, and `rhex_control` for motion. This keeps geometry, environment setup, and behaviour independently maintainable.

## What I implemented

- Six-legged robot description using URDF and Xacro.
- Gazebo launch and world configurations including ramps, stairs, and Mars-yard environments.
- ROS 2 control integration for the simulated joints.
- Keyboard teleoperation and coordinated tripod-gait motion in Python.
- RViz configuration for inspecting the model and transforms.

## Control strategy

Tripod gait divides the legs into two alternating groups, maintaining three points of contact while the other three legs advance. The controller coordinates joint targets across all six legs and exposes the motion through ROS 2, providing a base for future gait comparisons and feedback-driven locomotion.

## Demonstration

<div class="video-frame">
  <iframe src="https://www.youtube-nocookie.com/embed/xTXKbNmbx6I" title="RHex ROS 2 simulation demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
