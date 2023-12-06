// import { Schema, model, connect } from "mongoose";

import { Model } from "mongoose";

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
  price: number;
  quantity: number;
};

export type TUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: TName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders: TOrder;
  isDeleted: boolean;
};

// creating instance method :
// export type userMethods ={
//   isUserExist(id : number) : Promise<TUser>
// }

// export type userModel = Model<TUser,Record<string, never>,userMethods>

// creating static method :
export interface userInterfaceModel extends Model<TUser> {
  isUserExist(userId: number): Promise<TUser>;
}
