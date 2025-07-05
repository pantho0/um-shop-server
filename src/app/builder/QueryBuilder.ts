/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParentCategory } from './../modules/parent_category/parentCat.model';
import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFields: string[]) {
    const searchTerm = this.query.searchTerm as string;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          field =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }
  filter() {
    const queryObj = { ...this.query };
    const excludeFields = [
      'minPrice',
      'maxPrice',
      'searchTerm',
      'sortBy',
      'sortOrder',
      'page',
      'limit',
      'fields',
    ];
    excludeFields.forEach(el => delete queryObj[el]);

    const conditions: Record<string, any> = { ...queryObj };

    const minPrice = parseFloat(this.query.minPrice as string);
    const maxPrice = parseFloat(this.query.maxPrice as string);

    if (!isNaN(minPrice) || !isNaN(maxPrice)) {
      conditions.price = {};
      if (!isNaN(minPrice)) {
        conditions.price.$gte = minPrice;
      }
      if (!isNaN(maxPrice)) {
        conditions.price.$lte = maxPrice;
      }
    }

    this.modelQuery = this.modelQuery.find(conditions);
    return this;
  }
  sort() {
    const sortBy = this.query.sortBy as string;
    const sortOrder = this.query.sortOrder === 'asc' ? 1 : -1;
    this.modelQuery = this.modelQuery.sort({ [sortBy]: sortOrder });
    return this;
  }
  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 9;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
  fields() {
    const fields = (this.query.fields as string)?.split(',')?.join(' ');
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBuilder;
