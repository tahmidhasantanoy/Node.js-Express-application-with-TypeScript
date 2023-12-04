// import { Schema, model, connect } from "mongoose";

type TName = {
  firstName: string;
  lastName: string;
};
type TAddress = {
  street: string;
  city: string;
  country: string;
};

type TOrder = {
  productName: string;
  price: string;
  quality: string;
};

export type User = {
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
