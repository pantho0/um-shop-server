import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { ParentCategoryService } from './parentCat.service';
import catchAsync from '../../utils/catchAsync';

const createParentCategory = catchAsync(async (req, res) => {
  const result = await ParentCategoryService.createParentCategoryIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Parent Category created successfully',
    data: result,
  });
});

const getAllParentCategory = catchAsync(async (req, res) => {
  const result = await ParentCategoryService.getAllParentCategoryFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Parent Category fetched successfully',
    data: result,
  });
});

export const ParentCategoryControllers = {
  createParentCategory,
  getAllParentCategory,
};
