/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from 'mongoose';
import { TSubCategory } from './subCat.interface';
import slugify from 'slugify';

const subCategorySchema = new Schema<TSubCategory>(
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
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: 'ParentCategory',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

subCategorySchema.pre<TSubCategory>('save', async function (next) {
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

export const SubCategory = model<TSubCategory>(
  'SubCategory',
  subCategorySchema,
);
