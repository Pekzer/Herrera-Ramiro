import { defineCollection, z } from 'astro:content';

const practicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    videoUrl: z.string().url(),
  }),
});

export const collections = {
  'practices': practicesCollection,
};
