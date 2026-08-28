---
layout: project
order: 5
title: "RHex Hexapod Simulation"
description: "A ROS 2 Jazzy and Gazebo Harmonic simulation of an RHex-style six-legged robot, with a modular description, simulated environments, teleoperation, and tripod gait control."
date: 2025-12-12
categories: [Robotics, Robot Software & Simulation]
featured: false
featured_image: "/assets/images/projects/rhex/featured.webp"
image: "/assets/images/projects/rhex/featured.webp"
featured_fit: "contain"
github_url: "https://github.com/VipulDinesh/RHex_ROS2"
demo_url: "https://youtu.be/xTXKbNmbx6I"
demo_label: "Watch Demo"

code_files:
  - name: "Tripod Gait Controller"
    file: "tripod_gait.py"
    language: "python"
    download_url: "https://raw.githubusercontent.com/VipulDinesh/RHex_ROS2/main/src/rhex_control/rhex_control/tripod_gait.py"
  - name: "Teleoperation Controller"
    file: "teleop_control.py"
    language: "python"
    download_url: "https://raw.githubusercontent.com/VipulDinesh/RHex_ROS2/main/src/rhex_control/rhex_control/teleop_control.py"

components:
  - name: "ROS 2 Jazzy"
    quantity: 1
  - name: "Gazebo Harmonic"
    quantity: 1
  - name: "ros2_control"
    quantity: 1
  - name: "Custom RHex description and meshes"
    quantity: 1
---

The workspace separates the robot into three focused ROS 2 packages: `rhex_description` for the model, `rhex_gazebo` for simulation, and `rhex_control` for motion. That structure keeps geometry, environment setup, and behavior independently maintainable.

## What I implemented

- A six-legged robot description using URDF and Xacro.
- Gazebo launch and world configurations, including ramps, stairs, and Mars-yard environments.
- ROS 2 control integration for the simulated joints.
- Keyboard teleoperation and coordinated tripod-gait motion in Python.
- RViz configuration for inspecting the model and transforms.

## Control strategy

Tripod gait divides the legs into two alternating groups, allowing three points of contact while the other three legs advance. The controller coordinates joint targets across the six legs and exposes the motion through ROS 2, making the gait easier to tune and extend.

## Next steps

The simulation provides a base for comparing gaits, tuning performance across terrain profiles, and adding feedback-driven locomotion.

<div class="project-video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/xTXKbNmbx6I" title="RHex ROS 2 simulation demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
