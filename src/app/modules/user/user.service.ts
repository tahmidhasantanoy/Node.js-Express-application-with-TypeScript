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

const getAllUsersFromDB = async () => {
  const getUsersFromDB = await userModel.find();

  const requireFieldData = await mongoose
    .model("User")
    .find({}, { userName: 1, fullName: 1, age: 1, email: 1, address: 1 });

  return requireFieldData;
};

export default {
  createUserToDB,
  getAllUsersFromDB,
};
