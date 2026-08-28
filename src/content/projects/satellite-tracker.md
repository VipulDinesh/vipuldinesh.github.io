---
title: "Az–El Dual-Axis Satellite Tracker"
order: 3
featured: true
description: "A full-sky azimuth–elevation tracking system with sub-degree pointing accuracy, coordinated stepper control, and live GPredict/Hamlib integration."
organization: "GiftdMinds"
role: "Mechanical design, embedded control, and system integration"
period: "2026"
image: "/assets/images/projects/satellite-tracker/featured.webp"
imageAlt: "Completed dual-axis satellite tracking mechanism"
metrics:
  - "Sub-degree pointing accuracy"
  - "Azimuth ±180°"
  - "Elevation 0–90°"
  - "Concurrent two-axis motion"
technologies:
  - "ESP32"
  - "Stepper motor sizing"
  - "Non-blocking motion control"
  - "GPredict"
  - "Hamlib"
  - "Wi-Fi"
  - "OTA updates"
---

## Engineering objective

Create a mechanically balanced pointing system that can follow a low-Earth-orbit pass or point toward a geostationary satellite while accepting live commands from standard satellite-tracking software.

## Mechanical design

I sized the stepper motors through torque analysis and engineered a full-float bearing assembly that distributes structural loads independently of the motor shafts. This allows the actuation system to focus on positioning instead of carrying the complete mechanical load.

## Embedded control

The ESP32 firmware drives both axes concurrently using non-blocking motion control. It maintains a live Wi-Fi connection, parses Hamlib-format commands into coordinated step targets, and supports over-the-air firmware updates.

## Systems integration

The mechanical coordinate system, step resolution, motion limits, firmware state, and GPredict data stream all had to share one consistent definition. The result is a single integrated pointing instrument rather than separate mechanism and firmware demonstrations.

## Validated result

- **Sub-degree pointing accuracy**.
- Full-sky coverage across **azimuth ±180°** and **elevation 0–90°**.
- Simultaneous coordinated motion of both axes.
- Live GPredict client connection using Hamlib-format commands.

Detailed code and development artefacts belong to the employer project; this case study presents my engineering scope and validated system-level outcomes.
