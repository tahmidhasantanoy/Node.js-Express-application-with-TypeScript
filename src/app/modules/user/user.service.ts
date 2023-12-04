import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserToDB = async (userData: TUser) => {
  const storeUserData = await userModel.create(userData);
  return storeUserData;
};

export default {
  createUserToDB,
};
