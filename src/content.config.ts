import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    github: z.string().url().optional(),
  }),
});

const intro = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/intro" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    memoji: image(),
  }),
});

export const collections = { projects, intro };