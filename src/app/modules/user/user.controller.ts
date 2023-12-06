import { Request, Response } from "express";
import userService from "./user.service";
import userValidationSchema from "./user.validition";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body.user;

    const zodValidationUserData = userValidationSchema.parse(userData);

    const serviceResult = await userService.createUserToDB(
      zodValidationUserData
    );

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      result: serviceResult,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      result: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      result: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const singleUserResult = await userService.getSingleUserFromDB(
      Number(userId)
    );

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: singleUserResult,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      result: err,
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    // console.log(userId,updateData);

    const updateUserResult = await userService.updateSingleUserToDB(
      Number(userId),updateData
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: updateUserResult,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      result: err,
    });
  }
};

const deleteAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    const deleteUserResult = await userService.deleteSingleUserFromDB(
      Number(userId)
    );

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: deleteUserResult,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      result: err,
    });
  }
};

export default {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteAUser,
};
