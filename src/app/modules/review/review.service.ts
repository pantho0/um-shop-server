import status from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../product/product.model';
import { TReview } from './review.interface';
import { Review, Review, Review } from './review.model';

const addReviewInDB = async (slug: string, payload: TReview) => {
  const session = await Product.startSession();
  const product = await Product.findOne({ slug });
  if (!product) {
    throw new AppError(status.NOT_FOUND, 'Product not found');
  }
  try {
    session.startTransaction();
    const review = await Review.create(
      [
        {
          productId: product._id,
          userId: payload.userId,
          rating: payload.rating,
          comment: payload.comment,
        },
      ],
      { session },
    );
    await session.commitTransaction();
    return review;
  } catch (_error: any) {
    await session.abortTransaction();
    throw new AppError(status.BAD_REQUEST, 'Something went wrong');
  } finally {
    session.endSession();
  }
};

export const ReviewServices = {
  addReviewInDB,
};
