import status from 'http-status';
import AppError from '../../errors/AppError';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
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
