import status from 'http-status';
import AppError from '../../errors/AppError';
import { IProduct } from './product.interface';
import { Product } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.const';
import { ParentCategory } from '../parent_category/parentCat.model';
import { SubCategory } from '../sub_category/subCat.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  //for filter with parent category
  if (queryObj.parentCategory) {
    const parentSlug = (queryObj.parentCategory as string).split(',');
    const parentCategories = await ParentCategory.find({
      slug: { $in: parentSlug },
    }).select('_id');
    const parentCategoryIds = parentCategories.map(cat => cat._id);
    queryObj.parentCategory = parentCategoryIds;
  }

  //for filter with sub category
  if (queryObj.subCategory) {
    const subSlug = (queryObj.subCategory as string).split(',');
    const subCategories = await SubCategory.find({
      slug: { $in: subSlug },
    }).select('_id');
    const subCategoryIds = subCategories.map(cat => cat._id);
    queryObj.subCategory = subCategoryIds;
    // delete queryObj.subCategory;
  }

  const productQuery = new QueryBuilder(
    Product.find().populate([
      {
        path: 'parentCategory',
        select: ['_id', 'name', 'slug'],
      },
      {
        path: 'subCategory',
        select: ['_id', 'name', 'slug'],
      },
    ]),
    queryObj,
  )
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await productQuery.countTotal();
  const result = await productQuery.modelQuery;

  return { result, meta };
};

const getProductByIdFromDB = async (slug: string) => {
  const result = await Product.findOne({ slug });
  if (!result) {
    throw new AppError(
      status.NOT_FOUND,
      'Something went wrong or the product not found',
    );
  }
  return result;
};

const updateProductByIdFromDB = async (payload: Partial<IProduct>) => {
  const result = await Product.findOneAndUpdate(
    { slug: payload.slug },
    payload,
    {
      new: true,
    },
  );
  if (!result) {
    throw new AppError(
      status.NOT_FOUND,
      'Something went wrong or the product not found',
    );
  }
  return result;
};

const deleteProductByIdFromDB = async (slug: string) => {
  const result = await Product.findOneAndDelete({ slug });
  if (!result) {
    throw new AppError(
      status.NOT_FOUND,
      'Something went wrong or the product not found',
    );
  }
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductByIdFromDB,
};
