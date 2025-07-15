import { model, Schema } from 'mongoose';
import { IOrder, IOrderedItem } from './order.interface';

const orderedProductSchema = new Schema<IOrderedItem>(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product ID is required'],
      trim: true,
    },
    sku: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Product price cannot be negative'],
    },
    image: {
      type: [String],
      required: [true, 'Product image is required'],
      trim: true,
    },
    color: {
      type: String,
      required: [true, 'Product color is required'],
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'Product model is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
      min: [1, 'Product quantity must be at least 1'],
    },
  },
  {
    timestamps: false,
  },
);

const orderSchema = new Schema<IOrder>(
  {
    orderId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
    },
    district: {
      type: String,
      required: [true, 'District is required'],
      trim: true,
    },
    upazilla: {
      type: String,
      required: [true, 'Upazilla is required'],
      trim: true,
    },
    detailsInformation: {
      type: String,
      required: [true, 'Details information is required'],
      trim: true,
    },
    paymentMethod: {
      type: String,
      required: [true, 'Payment method is required'],
      trim: true,
    },
    status: {
      type: String,
      required: [true, 'Status should be given'],
      default: 'Pending',
      enum: ['Pending', 'In progress', 'Delivered', 'Canceled'],
    },
    orderedItems: {
      type: [orderedProductSchema],
      required: [true, 'Ordered items list cannot be empty'],
      validate: {
        validator: function (v: IOrderedItem[]) {
          return v.length > 0;
        },
        message: 'An order must contain at least one product.',
      },
    },
    grandTotal: {
      type: Number,
      required: [true, 'Grand total is required'],
      min: [0, 'Grand total cannot be negative'],
    },
  },

  {
    timestamps: true,
  },
);

export const Order = model<IOrder>('Order', orderSchema);
