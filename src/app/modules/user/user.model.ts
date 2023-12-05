import { Schema, model /* connect */ } from "mongoose";
import { TAddress, TName, TOrder, TUser } from "./user.interface";

const userFullNameSchema = new Schema<TName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const userAddressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const userOrderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: userFullNameSchema, required: true },
  age: { type: Number },
  email: { type: String, require: true },
  isActive: { type: Boolean, default: true },
  hobbies: ["Reading", "Coding", "Hiking"],
  address: userAddressSchema,
  orders: userOrderSchema,
});

export const userModel = model<TUser>("User", userSchema);
