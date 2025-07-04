/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from 'mongoose';
import { TParentCategory } from './parentCat.interface';
import slugify from 'slugify';

const parentCategorySchema = new Schema<TParentCategory>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

parentCategorySchema.pre<TParentCategory>('save', async function (next) {
  // Only generate or update slug if the title has been modified or it's a new document
  if (this.isModified('name') || this.isNew) {
    const baseSlug = slugify(this.name, { lower: true, strict: true });
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

export const ParentCategory = model<TParentCategory>(
  'ParentCategory',
  parentCategorySchema,
);
