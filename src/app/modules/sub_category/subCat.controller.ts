import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SubCategoryService } from './subCat.service';

const createSubCategory = catchAsync(async (req, res) => {
  const result = await SubCategoryService.createSubCategoryIntoDB(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'SubCategory created successfully',
    data: result,
  });
});

const getAllSubCategory = catchAsync(async (req, res) => {
  const result = await SubCategoryService.getAllSubCategoryFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'SubCategory fetched successfully',
    data: result,
  });
});

const getSubCategoryByParentId = catchAsync(async (req, res) => {
  const result = await SubCategoryService.getSubCategoryByParentIdFromDB(
    req.params.parentId,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'SubCategory fetched successfully',
    data: result,
  });
});

export const subCategoryControllers = {
  createSubCategory,
  getAllSubCategory,
  getSubCategoryByParentId,
};
