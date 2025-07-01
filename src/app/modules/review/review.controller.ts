import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';

const addReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.addReviewInDB(req.params.slug, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

const getAllReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review fetched successfully',
    data: result,
  });
});

const getReviewById = catchAsync(async (req, res) => {
  const result = await ReviewServices.getReviewByIdFromDB(req.params.productId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review fetched successfully',
    data: result,
  });
});

const updateReviewById = catchAsync(async (req, res) => {
  const result = await ReviewServices.updateReviewByIdFromDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteReviewById = catchAsync(async (req, res) => {
  const result = await ReviewServices.deleteReviewByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review deleted successfully',
    data: result,
  });
});

export const ReviewControllers = {
  addReview,
  getAllReview,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
