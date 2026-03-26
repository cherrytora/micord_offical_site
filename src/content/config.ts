import { defineCollection, z } from 'astro:content';

const releaseNotes = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    date: z.string(),
    title: z.string(),
    summary: z.string(),
  }),
});

const roadmap = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    quarter: z.string(),
    title: z.string(),
    desc: z.string(),
    status: z.enum(['done', 'building', 'planned']),
    features: z.array(z.string()),
  }),
});

export const collections = {
  'release-notes': releaseNotes,
  'roadmap': roadmap,
};
