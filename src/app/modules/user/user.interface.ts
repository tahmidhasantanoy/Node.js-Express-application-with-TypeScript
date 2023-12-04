// import { Schema, model, connect } from "mongoose";

export type TName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TOrder = {
  productName: string;
  price: string;
  quantity: string;
};

export type TUser = {
  userId: string;
  userName: string;
  password: string;
  fullName: TName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders: TOrder;
};
