export interface IOrder {
  fullName: string;
  mobileNumber: string;
  email: string;
  district: string;
  upazilla: string;
  detailsInformation: string;
  paymentMethod: string;
  orderedItems: IOrderedItem[];
  grandTotal: number;
}

export interface IOrderedItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  model: string;
  quantity: number;
}
