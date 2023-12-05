import mongoose from "mongoose";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserToDB = async (userData: TUser) => {
  const storeUserData = await userModel.create(userData);

  const usersWithoutPassword = await mongoose
    .model("User")
    .find({})
    .select("-password");
  /* try to minimize */

  return usersWithoutPassword;
};

const getAllUserFromDB = async () => {
  const usersFromDB = await userModel.find();

  const requireFieldData = await mongoose
    .model("User")
    .find({}, { userName: 1, fullName: 1, age: 1, email: 1, address: 1 });

  return requireFieldData;
};

const getSingleUserFromDB = async (singleUserData: number) => {
  const singleUserFromDB = await userModel.find({ userId: singleUserData });

  const SingleUserWithoutPassword = await mongoose
    .model("User")
    .find({ userId: singleUserData })
    .select("-password");
  return SingleUserWithoutPassword;
};

export default {
  createUserToDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
