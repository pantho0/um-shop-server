import { z } from 'zod';

// Zod schema for individual ordered products
export const orderedProductSchema = z.object({
  id: z.string().trim().min(1, 'Product ID is required'),
  sku: z.string(), // Assuming ObjectId is represented as a string
  name: z.string().trim().min(1, 'Product name is required'),
  price: z.number().min(0, 'Product price cannot be negative'),
  image: z.string(),
  color: z.string().trim().min(1, 'Product color is required'),
  model: z.string().trim().min(1, 'Product model is required'),
  quantity: z.number().min(1, 'Product quantity must be at least 1'),
});

// Zod schema for the main order
export const orderSchema = z.object({
  body: z.object({
    orderId: z.string().trim().min(1, 'Order ID is required'),
    fullName: z.string().trim().min(1, 'Full name is required'),
    mobileNumber: z.string().trim().min(1, 'Mobile number is required'),
    email: z
      .string()
      .trim()
      .email('Invalid email format')
      .min(1, 'Email is required'),
    district: z.string().trim().min(1, 'District is required'),
    upazilla: z.string().trim().min(1, 'Upazilla is required'),
    detailsInformation: z
      .string()
      .trim()
      .min(1, 'Details information is required'),
    paymentMethod: z.string().trim().min(1, 'Payment method is required'),
    status: z
      .enum(['Pending', 'In progress', 'Delivered', 'Canceled'])
      .default('Pending'),
    orderedItems: z
      .array(orderedProductSchema)
      .min(1, 'An order must contain at least one product.'),
    grandTotal: z.number().min(0, 'Grand total cannot be negative'),
  }),
});
