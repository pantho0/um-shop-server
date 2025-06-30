import status from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../product/product.model';
import { TReview } from './review.interface';
import { Review } from './review.model';

const addReviewInDB = async (slug: string, payload: TReview) => {
  const product = await Product.findOne({ slug });
  if (!product) {
    throw new AppError(status.NOT_FOUND, 'Product not found');
  }

  const review = await Review.create({
    productId: product._id,
    userId: payload.userId,
    rating: payload.rating,
    comment: payload.comment,
  });
  return review;
};

export const ReviewServices = {
  addReviewInDB,
};
