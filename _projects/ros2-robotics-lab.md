---
layout: project
order: 6
title: "ROS 2 Robotics Lab"
description: "A hands-on ROS 2 workspace covering publishers and subscribers, launch systems, URDF robot models, Gazebo simulation, RViz, perception, and robot control experiments."
date: 2024-11-13
categories: [Robotics, ROS 2, Simulation, Python]
featured: false
github_url: "https://github.com/VipulDinesh/ROS2"

code_files:
  - name: "Arm Forward-Kinematics Controller"
    file: "controller_fk.py"
    language: "python"
    download_url: "https://raw.githubusercontent.com/VipulDinesh/ROS2/main/manual/Code/urdf_tutorial/urdf_tutorial/controller_fk.py"
  - name: "Robot Motion Node"
    file: "move_robot.py"
    language: "python"
    download_url: "https://raw.githubusercontent.com/VipulDinesh/ROS2/main/src/my_sim/my_sim/move_robot.py"
---

This repository is my working robotics lab: a collection of focused experiments that build from ROS 2 fundamentals toward complete simulated systems. It includes communication examples, launch files, robot descriptions, Gazebo setups, and control nodes.

## Topics explored

- Publisher/subscriber communication and ROS 2 package structure.
- URDF descriptions for mobile robots, manipulators, and a throwbot platform.
- Launching and inspecting robots in Gazebo and RViz.
- Python control nodes, including arm and mobile-robot experiments.
- Early perception and simulation workflows.

## Why it matters

Small, testable experiments are useful when learning a large robotics stack. This workspace acts as a reference implementation for concepts that can be reused in larger projects such as the RHex simulation.
