import { z } from 'zod';

export const createProductValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .trim()
      .min(1, { message: 'Product title cannot be empty.' })
      .nonempty({ message: 'Product title is required.' }),
    parentCategory: z
      .string()
      .trim()
      .min(1, { message: 'Parent category cannot be empty.' })
      .nonempty({ message: 'Parent category is required.' }),
    subCategory: z
      .string()
      .trim()
      .min(1, { message: 'Sub category cannot be empty.' })
      .nonempty({ message: 'Sub category is required.' }),
    variant_color: z
      .array(z.string().trim().min(1, { message: 'Color cannot be empty.' }))
      .min(1, { message: 'At least one variant color is required.' }),
    size: z
      .array(z.string().trim().min(1, { message: 'Size cannot be empty.' }))
      .min(1, { message: 'At least one size is required.' }),

    slug: z.string().trim().optional(),

    details: z
      .string()
      .trim()
      .min(1, { message: 'Product details cannot be empty.' })
      .nonempty({ message: 'Product details are required.' }),
    price: z
      .number()
      .min(0, { message: 'Price cannot be negative.' })
      .refine(val => typeof val === 'number' && !isNaN(val), {
        message: 'Price must be a valid number.',
      }),
    images: z
      .array(z.string().url({ message: 'Each image must be a valid URL.' }))
      .min(1, { message: 'At least one image URL is required.' }),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .trim()
      .min(1, { message: 'Product title cannot be empty.' })
      .optional(),
    parentCategory: z
      .string()
      .trim()
      .min(1, { message: 'Parent category cannot be empty.' })
      .optional(),
    subCategory: z
      .string()
      .trim()
      .min(1, { message: 'Sub category cannot be empty.' })
      .optional(),
    variant_color: z
      .array(z.string().trim().min(1, { message: 'Color cannot be empty.' }))
      .min(1, { message: 'At least one variant color is required.' })
      .optional(),
    size: z
      .array(z.string().trim().min(1, { message: 'Size cannot be empty.' }))
      .min(1, { message: 'At least one size is required.' })
      .optional(),

    slug: z.string().trim().optional(),

    details: z
      .string()
      .trim()
      .min(1, { message: 'Product details cannot be empty.' })
      .optional(),
    price: z
      .number()
      .min(0, { message: 'Price cannot be negative.' })
      .refine(val => typeof val === 'number' && !isNaN(val), {
        message: 'Price must be a valid number.',
      })
      .optional(),
    images: z
      .array(z.string().url({ message: 'Each image must be a valid URL.' }))
      .min(1, { message: 'At least one image URL is required.' })
      .optional(),
  }),
});
