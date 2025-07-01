import { model, Schema } from 'mongoose';
import { TOrder, TOrderedProduct } from './order.interface';

const orderedProductSchema = new Schema<TOrderedProduct>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product ID is required for ordered product'],
    },
    size: {
      type: String,
      required: [true, 'Size is required for ordered product'],
    },
    variant_color: {
      type: String,
      required: [true, 'Variant color is required for ordered product'],
    },
    u_price: {
      type: Number,
      required: [true, 'Unit price is required for ordered product'],
      min: [0, 'Unit price cannot be negative'],
    },
    qty: {
      type: Number,
      required: [true, 'Quantity is required for ordered product'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price for ordered product is required'],
      min: [0, 'Total price cannot be negative'],
    },
  },
  {
    timestamps: false,
  },
);

const orderSchema = new Schema<TOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required for the order'],
    },
    dist: {
      type: String,
      required: [true, 'Delivery district/type is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Delivery address is required'],
      trim: true,
    },
    grand_total: {
      type: Number,
      required: [true, 'Grand total is required for the order'],
      min: [0, 'Grand total cannot be negative'],
    },
    orderedProducts: {
      type: [orderedProductSchema],
      required: [true, 'Ordered products list cannot be empty'],
      validate: {
        validator: function (v: TOrderedProduct[]) {
          return v.length > 0;
        },
        message: 'An order must contain at least one product.',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', orderSchema);
