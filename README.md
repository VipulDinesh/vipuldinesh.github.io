# Vipul Dinesh — Robotics Engineering Portfolio

Recruiter-focused engineering portfolio built with Astro and deployed as a static site on GitHub Pages.

## Editing content

Project case studies are Markdown files in `src/content/projects/`. Each file starts with a small metadata block containing the project title, role, organization, metrics, technologies, links, and image path. Everything below that block is normal Markdown.

To add a project:

1. Copy an existing file in `src/content/projects/`.
2. Rename it using a short URL-friendly name.
3. Replace its metadata and written case study.
4. Add its images under `public/assets/images/projects/`.

Shared page structure lives under `src/layouts/`, pages under `src/pages/`, and the visual system in `src/styles/global.css`.

## Local development

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open the local address printed by Astro. Before publishing, verify the production build:

```bash
npm run build
```

## Deployment

The GitHub Pages workflow builds and publishes the static site when changes reach the `main` branch. The `portfolio-v2` branch can be developed and reviewed without changing the currently published site.
