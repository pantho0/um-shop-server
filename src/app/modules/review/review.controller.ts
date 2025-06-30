import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';

const addReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.addReviewInDB(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

export const ReviewControllers = {
  addReview,
};
