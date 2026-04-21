import { z } from 'astro:content'

export const blogSchema = z.object({
  title: z.string(),
  pubDate: z.string().transform((str) => new Date(str)),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  draft: z.boolean().optional(),
  containImage: z.boolean().optional(),
  description: z.string(),
})

export const projectSchema = z.object({
  name: z.string(),
  pubDate: z
    .string()
    .transform((str) => new Date(str))
    .optional(),
  year: z.string().optional(),
  tags: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
  status: z.enum(['live', 'wip', 'archived']).optional(),
  role: z.string().optional(),
  long: z.string().optional(),
  imageUrl: z.string(),
  githubUrl: z.string(),
  projectUrl: z.string(),
  description: z.string(),
  images: z.object({
    small: z.string(),
    medium: z.string(),
    big: z.string(),
    large: z.string(),
  }),
})
