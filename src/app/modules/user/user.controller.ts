import { Request, Response } from "express";
import userService from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const serviceResult = await userService.createUserToDB(userData);

    res.status(200).json({
      success: true,
      message: "Successfully user stored in database",
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

export default {
  createUser,
};
