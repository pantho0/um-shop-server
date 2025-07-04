import { TSubCategory } from './subCat.interface';
import { SubCategory } from './subCat.model';

const createSubCategoryIntoDB = async (payload: TSubCategory) => {
  const result = await SubCategory.create(payload);
  return result;
};

const getAllSubCategoryFromDB = async () => {
  const result = await SubCategory.find();
  return result;
};

const getSubCategoryByParentIdFromDB = async (parentId: string) => {
  const result = await SubCategory.find({ parentCategory: parentId });
  return result;
};

export const SubCategoryService = {
  createSubCategoryIntoDB,
  getAllSubCategoryFromDB,
  getSubCategoryByParentIdFromDB,
};
