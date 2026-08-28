import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    description: z.string(),
    organization: z.string(),
    role: z.string(),
    period: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    demoUrl: z.url().optional(),
    githubUrl: z.url().optional(),
    metrics: z.array(z.string()),
    technologies: z.array(z.string())
  })
});

export const collections = { projects };
