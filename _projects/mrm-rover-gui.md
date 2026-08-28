---
layout: project
published: false
title: "MRM Rover Operator Interface"
description: "A PyGame-based ground-control interface for monitoring and operating a rover, with controller input and configurable network endpoints for rover subsystems."
date: 2024-05-18
categories: [Robotics, Robot Software & Simulation]
featured: false
github_url: "https://github.com/VipulDinesh/MRM-Pygame-GUI"

code_files:
  - name: "Rover GUI"
    file: "sm_lastgui_new.py"
    language: "python"
    download_url: "https://raw.githubusercontent.com/VipulDinesh/MRM-Pygame-GUI/main/sm_lastgui_new.py"

components:
  - name: "Python"
    quantity: 1
  - name: "PyGame"
    quantity: 1
  - name: "Game controller"
    quantity: 1
  - name: "Configurable rover endpoints"
    quantity: 1
---

This project explores the human side of a robotic system: giving an operator one clear place to view rover information and issue commands. The interface is built in Python with PyGame and is designed around a physical game controller.

## Interface architecture

Rover-related network addresses are kept in an `ip_list.txt` configuration file rather than embedded in the interface code. Individual endpoints can be disabled without changing the program, keeping setup practical as subsystems move between networks or test configurations.

## Engineering focus

- Controller-driven rover operation.
- A visual status surface built with PyGame.
- Configurable subsystem addressing.
- A lightweight Python implementation suitable for rapid iteration in the field.

## What I learned

Operator software needs to make connectivity and system state obvious. Keeping configuration outside the code also reduces friction when the rover's network layout changes during testing.
