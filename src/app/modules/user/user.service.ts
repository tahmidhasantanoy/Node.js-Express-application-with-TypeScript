import mongoose from "mongoose";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserToDB = async (userData: TUser) => {
  
  if (await userModel.isUserExist(userData.userId)) {
    console.log("exist");
    throw new Error("User already exist");
  }

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

const deleteSingleUserFromDB = async (deleteUserData: number) => {
  const deleteUserFromDB = await userModel.updateOne(
    {
      userId: deleteUserData,
    },
    { isDeleted: true }
  );
  return deleteUserFromDB;
};

export default {
  createUserToDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
};
