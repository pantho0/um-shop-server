import { z } from 'zod';

export const createReviewValidationSchema = z.object({
  body: z.object({
    productId: z
      .string()
      .trim()
      .min(1, { message: 'Product ID cannot be empty.' })
      .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'Product ID must be a valid MongoDB ObjectId string.',
      }),
    userId: z
      .string()
      .trim()
      .min(1, { message: 'User ID cannot be empty.' })
      .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'User ID must be a valid MongoDB ObjectId string.',
      }),
    rating: z
      .number()
      .int({ message: 'Rating must be an integer.' })
      .min(1, { message: 'Rating must be at least 1.' })
      .max(5, { message: 'Rating cannot exceed 5.' }),
    comment: z
      .string()
      .trim()
      .min(1, { message: 'Comment cannot be empty.' })
      .nonempty({ message: 'Comment is required.' }),
  }),
});

export const updateReviewValidationSchema = z.object({
  body: z.object({
    productId: z
      .string()
      .trim()
      .min(1, { message: 'Product ID cannot be empty.' })
      .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'Product ID must be a valid MongoDB ObjectId string.',
      })
      .optional(),
    userId: z
      .string()
      .trim()
      .min(1, { message: 'User ID cannot be empty.' })
      .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
        message: 'User ID must be a valid MongoDB ObjectId string.',
      })
      .optional(),
    rating: z
      .number()
      .int({ message: 'Rating must be an integer.' })
      .min(1, { message: 'Rating must be at least 1.' })
      .max(5, { message: 'Rating cannot exceed 5.' })
      .optional(),
    comment: z
      .string()
      .trim()
      .min(1, { message: 'Comment cannot be empty.' })
      .optional(),
  }),
});
