import { z } from 'zod';

const orderedProductValidationSchema = z.object({
  productId: z
    .string()
    .trim()
    .min(1, { message: 'Product ID cannot be empty.' })
    .nonempty({ message: 'Product ID is required for ordered product.' })
    .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
      message: 'Product ID must be a valid MongoDB ObjectId string.',
    }),
  size: z
    .string()
    .trim()
    .min(1, { message: 'Size cannot be empty.' })
    .nonempty({ message: 'Size is required for ordered product.' }),
  variant_color: z
    .string()
    .trim()
    .min(1, { message: 'Variant color cannot be empty.' })
    .nonempty({ message: 'Variant color is required for ordered product.' }),
  u_price: z
    .number()
    .min(0, { message: 'Unit price cannot be negative.' })
    .refine(val => typeof val === 'number' && !isNaN(val), {
      message: 'Unit price must be a valid number.',
    }),
  qty: z
    .number()
    .int({ message: 'Quantity must be an integer.' })
    .min(1, { message: 'Quantity must be at least 1.' }),
  totalPrice: z
    .number()
    .min(0, { message: 'Total price cannot be negative.' })
    .refine(val => typeof val === 'number' && !isNaN(val), {
      message: 'Total price must be a valid number.',
    }),
});

export const createOrderValidationSchema = z.object({
  userId: z
    .string()
    .trim()
    .min(1, { message: 'User ID cannot be empty.' })
    .nonempty({ message: 'User ID is required for the order.' })
    .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
      message: 'User ID must be a valid MongoDB ObjectId string.',
    }),
  dist: z
    .string()
    .trim()
    .min(1, { message: 'Delivery district/type cannot be empty.' })
    .nonempty({ message: 'Delivery district/type is required.' }),
  address: z
    .string()
    .trim()
    .min(1, { message: 'Delivery address cannot be empty.' })
    .nonempty({ message: 'Delivery address is required.' }),
  grand_total: z
    .number()
    .min(0, { message: 'Grand total cannot be negative.' })
    .refine(val => typeof val === 'number' && !isNaN(val), {
      message: 'Grand total must be a valid number.',
    }),
  isConfirmed: z.boolean().default(false),
  isDelivered: z.boolean().default(false),
  isPaid: z.boolean().default(false),
  paymentType: z
    .string()
    .trim()
    .min(1, { message: 'Payment type cannot be empty.' })
    .nonempty({ message: 'Payment type is required.' }),
  status: z
    .string()
    .trim()
    .min(1, { message: 'Status cannot be empty.' })
    .nonempty({ message: 'Status is required.' }),
  orderedProducts: z
    .array(orderedProductValidationSchema)
    .min(1, { message: 'An order must contain at least one product.' }),
});

export const updateOrderValidationSchema = z.object({
  userId: z
    .string()
    .trim()
    .min(1, { message: 'User ID cannot be empty.' })
    .refine(val => /^[0-9a-fA-F]{24}$/.test(val), {
      message: 'User ID must be a valid MongoDB ObjectId string.',
    })
    .optional(),
  dist: z
    .string()
    .trim()
    .min(1, { message: 'Delivery district/type cannot be empty.' })
    .optional(),
  address: z
    .string()
    .trim()
    .min(1, { message: 'Delivery address cannot be empty.' })
    .optional(),
  grand_total: z
    .number()
    .min(0, { message: 'Grand total cannot be negative.' })
    .refine(val => typeof val === 'number' && !isNaN(val), {
      message: 'Grand total must be a valid number.',
    })
    .optional(),
  isConfirmed: z.boolean().optional(),
  isDelivered: z.boolean().optional(),
  isPaid: z.boolean().optional(),
  paymentType: z
    .string()
    .trim()
    .min(1, { message: 'Payment type cannot be empty.' })
    .optional(),
  status: z
    .string()
    .trim()
    .min(1, { message: 'Status cannot be empty.' })
    .optional(),
  orderedProducts: z
    .array(orderedProductValidationSchema)
    .min(1, { message: 'An order must contain at least one product.' })
    .optional(),
});
