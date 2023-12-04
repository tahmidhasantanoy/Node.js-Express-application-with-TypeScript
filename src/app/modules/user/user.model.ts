import { Schema, model, /* connect */ } from "mongoose";
import { TAddress, TName, TOrder, User } from "./user.interface";

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
  price: { type: String, required: true },
  quantity: { type: String, required: true },
});

const userSchema = new Schema<User>({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: userFullNameSchema,
  age: { type: Number },
  email: { type: String, require: true },
  isActive: { type: Boolean, default: true },
  hobbies: ["Reading", "Coding", "Hiking"],
  address: userAddressSchema,
  orders: userOrderSchema,
});

export const userModel = model<User>("User", userSchema);
