import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const essaySchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.optional(image()),
    topic: z.string(),
  });

const peakPerformance = defineCollection({
  loader: glob({ base: './src/content/peak-performance', pattern: '**/*.{md,mdx}' }),
  schema: essaySchema,
});

const entrepreneurship = defineCollection({
  loader: glob({ base: './src/content/entrepreneurship', pattern: '**/*.{md,mdx}' }),
  schema: essaySchema,
});

const workplaceCulture = defineCollection({
  loader: glob({ base: './src/content/workplace-culture', pattern: '**/*.{md,mdx}' }),
  schema: essaySchema,
});

const personalGrowth = defineCollection({
  loader: glob({ base: './src/content/personal-growth', pattern: '**/*.{md,mdx}' }),
  schema: essaySchema,
});

const purposeIdentity = defineCollection({
  loader: glob({ base: './src/content/purpose-identity', pattern: '**/*.{md,mdx}' }),
  schema: essaySchema,
});

const leadership = defineCollection({
  loader: glob({ base: './src/content/leadership', pattern: '**/*.{md,mdx}' }),
  schema: essaySchema,
});

export const collections = {
  'peak-performance': peakPerformance,
  'entrepreneurship': entrepreneurship,
  'workplace-culture': workplaceCulture,
  'personal-growth': personalGrowth,
  'purpose-identity': purposeIdentity,
  'leadership': leadership,
};
