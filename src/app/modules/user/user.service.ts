import mongoose from "mongoose";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserToDB = async (userData: TUser) => {
  if (await userModel.isUserExist(userData.userId)) {
    console.log("exist");
    throw new Error("User already exist");
  }

  const storeUserData = await userModel.create(userData);

  const usersWithoutPassword = await mongoose.model("User").find({}).select({
    _id: 0,
    userId: 1,
    userName: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  /* try to minimize */

  return usersWithoutPassword;
};

const getAllUserFromDB = async () => {
  const usersFromDB = await userModel.find();

  const requireFieldData = await mongoose
    .model("User")
    .find({})
    .select({ _id: 0, userName: 1, fullName: 1, age: 1, email: 1, address: 1 });

  return requireFieldData;
};

const getSingleUserFromDB = async (singleUserData: number) => {
  const singleUserFromDB = await userModel.find({ userId: singleUserData });

  const SingleUserWithoutPassword = await mongoose
    .model("User")
    .find({ userId: singleUserData })
    .select({ _id: 0, userName: 1, fullName: 1, age: 1, email: 1, address: 1 });

  if (SingleUserWithoutPassword.length === 0) {
    throw new Error("User is not found");
  }

  return SingleUserWithoutPassword;
};

const updateSingleUserToDB = async (
  updateUserId: number,
  updateUserData: TUser
) => {
  if (!(await userModel.isUserExist(updateUserId))) {
    throw new Error("User is not exist!");
  }

  const updateUserToDB = await userModel
    .findOneAndUpdate({ userId: updateUserId }, { $set: updateUserData })
    .select({
      _id: 0,
      userId: 1,
      userName: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    });
  // .updateOne();

  console.log(updateUserToDB);
  return updateUserToDB;
};

const deleteSingleUserFromDB = async (deleteUserData: number) => {
  if (!(await userModel.isUserExist(deleteUserData))) {
    throw new Error("User is not exist!");
  }

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
  updateSingleUserToDB,
  deleteSingleUserFromDB,
};
