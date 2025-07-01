import status from 'http-status';
import AppError from '../../errors/AppError';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };
  const productSearchableFields = ['title', 'parentCategory', 'subCategory'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Product.find({
    $or: productSearchableFields.map(field => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = [
    'searchTerm',
    'sortBy',
    'sortOrder',
    'page',
    'limit',
    'fields',
  ];
  excludeFields.forEach(el => delete queryObj[el]);

  const filterQuery = searchQuery.find(queryObj);

  let sortBy = 'createdAt';
  let sortOrder: 1 | -1 = -1;
  if (query?.sortBy) {
    sortBy = query.sortBy as string;
    sortOrder = query.sortOrder === 'asc' ? 1 : -1;
  }
  const sortQuery = filterQuery.sort({ [sortBy]: sortOrder });

  let page = 1;
  let limit = 3;
  let skip = 0;

  if (query.limit) {
    limit = Number(query.limit);
  }
  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip).limit(limit);

  let fields = '-__v';
  if (query.fields) {
    fields = (query.fields as string).split(',').join(' ');
  }

  const fieldQuery = await paginateQuery.select(fields);

  return fieldQuery;
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

const updateProductByIdFromDB = async (slug: string, payload: IProduct) => {
  const result = await Product.findOneAndUpdate({ slug }, payload, {
    new: true,
  });
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
