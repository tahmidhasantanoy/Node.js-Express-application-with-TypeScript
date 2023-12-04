import { Request, Response } from "express";
import userService from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const serviceResult = await userService.createUserToDB(userData);

    
  } catch (err: any) {
    console.log(err);
  }
};

export default {
  createUser,
};
