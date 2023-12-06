import { Schema, model /* connect */ } from "mongoose";
import {
  TAddress,
  TName,
  TOrder,
  TUser,
  // userInterfaceModel,
} from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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

const userSchema = new Schema<TUser/* , userInterfaceModel */>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  fullName: { type: userFullNameSchema, required: true },
  age: { type: Number },
  email: { type: String, require: true },
  isActive: { type: Boolean, default: true },
  hobbies: ["Reading", "Coding", "Hiking"],
  address: userAddressSchema,
  orders: userOrderSchema,
  isDeleted: { type: Boolean, default: false },
});

// Mongoose method :
// userSchema.statics.isUserExist = async function(id : number){
//   await User.findOne({userId : id})
// }

// Mongoose Middleware :
userSchema.pre("save", async function () {

  console.log(this);
  const password = this.password;

  this.password = await bcrypt.hash(password, Number(config.saltRound));
});

userSchema.post("save", async function (doc, next) {
  console.log("after stored");

  next();
});

userSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } }); //will send isDeleted : false

  next();
});

userSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const userModel = model<TUser/* , userInterfaceModel */>("User", userSchema);
