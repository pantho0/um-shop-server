import { TParentCategory } from './parentCat.interface';
import { ParentCategory } from './parentCat.model';

const createParentCategoryIntoDB = async (payload: TParentCategory) => {
  const result = await ParentCategory.create(payload);
  return result;
};

const getAllParentCategoryFromDB = async () => {
  const result = await ParentCategory.find();
  return result;
};

export const ParentCategoryService = {
  createParentCategoryIntoDB,
  getAllParentCategoryFromDB,
};
