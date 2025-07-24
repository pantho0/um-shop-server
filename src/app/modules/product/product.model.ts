/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from 'mongoose';
import { IProduct, Variant } from './product.interface';
import slugify from 'slugify';

const VariantSchema = new Schema<Variant>({
  sku: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
    },
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: 'ParentCategory',
      required: [true, 'Parent category is required'],
    },
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: 'SubCategory',
      required: [true, 'Sub category is required'],
    },
    variants: {
      type: [VariantSchema],
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    details: {
      type: String,
      required: [true, 'Product details are required'],
    },

    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Mongoose Pre-Save Hook to generate a unique slug
ProductSchema.pre<IProduct>('save', async function (next) {
  // Only generate or update slug if the title has been modified or it's a new document
  if (this.isModified('title') || this.isNew) {
    const baseSlug = slugify(this.title, { lower: true, strict: true });
    let uniqueSlug = baseSlug;
    let counter = 1;

    while (
      await (this.constructor as any).findOne({
        slug: uniqueSlug,
        _id: { $ne: this._id },
      })
    ) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }
    this.slug = uniqueSlug;
  }
  next();
});

export const Product = model<IProduct>('Product', ProductSchema);
