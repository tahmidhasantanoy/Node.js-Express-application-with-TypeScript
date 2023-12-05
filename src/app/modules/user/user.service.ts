// import mongoose from "mongoose";
import mongoose from "mongoose";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserToDB = async (userData: TUser) => {
  const storeUserData = await userModel.create(userData);

  const usersWithoutPassword = await mongoose
    .model("User")
    .find({})
    .select("-password");

  return usersWithoutPassword;
};

export default {
  createUserToDB,
};
