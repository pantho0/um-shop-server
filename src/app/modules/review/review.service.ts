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

const getAllReviewFromDB = async () => {
  const reviews = await Review.find();
  return reviews;
};

const getReviewByIdFromDB = async (id: string) => {
  const review = await Review.findOne({ productId: id });
  if (!review) {
    throw new AppError(status.NOT_FOUND, 'Review not found');
  }
  return review;
};

const updateReviewByIdFromDB = async (id: string, payload: TReview) => {
  const review = await Review.findByIdAndUpdate({ productId: id }, payload, {
    new: true,
  });
  if (!review) {
    throw new AppError(status.NOT_FOUND, 'Review not found');
  }
  return review;
};

const deleteReviewByIdFromDB = async (id: string) => {
  const review = await Review.findByIdAndDelete({ productId: id });
  if (!review) {
    throw new AppError(status.NOT_FOUND, 'Review not found');
  }
  return review;
};

export const ReviewServices = {
  addReviewInDB,
  getAllReviewFromDB,
  getReviewByIdFromDB,
  updateReviewByIdFromDB,
  deleteReviewByIdFromDB,
};
