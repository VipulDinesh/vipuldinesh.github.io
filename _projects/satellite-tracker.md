---
layout: project
order: 3
title: "Az-El Dual Axis Satellite Tracker"
description: "A full-sky azimuth–elevation tracking system with sub-degree pointing accuracy, coordinated stepper control, and live GPredict/Hamlib integration."
date: 2026-08-01
categories: [Mechanical Systems, Embedded & Control, Systems Integration, Precision & Validation]
featured: true
featured_image: "/assets/images/projects/satellite-tracker/featured.jpg"
featured_fit: "contain"
featured_position: "50% 50%"
---

Developed at GiftdMinds, the tracker combines a mechanically balanced two-axis assembly with embedded motion control and live satellite-pointing commands. It can follow a low-Earth-orbit pass or point toward a geostationary satellite.

## Performance

- **Sub-degree pointing accuracy**.
- Full-sky coverage: **azimuth ±180°** and **elevation 0–90°**.
- Simultaneous, coordinated motion of both axes.
- Live client connection to **GPredict** using Hamlib-format commands.

## Mechanical design

I sized the stepper motors through torque analysis and engineered a full-float bearing assembly to distribute structural loads independently of the motor shafts. This allowed the actuation system to concentrate on positioning rather than carrying the complete mechanical load.

## Embedded control

The ESP32 firmware drives both axes concurrently using non-blocking motion control. It maintains a live Wi-Fi connection, parses Hamlib commands into coordinated step targets, and supports over-the-air firmware updates.

## Systems integration

The project required the mechanical coordinate system, step resolution, motion limits, firmware state, and GPredict data stream to agree. The result is a single integrated pointing instrument rather than separate mechanism and firmware demonstrations.
