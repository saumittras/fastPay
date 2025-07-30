import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";
import { IUser, Role } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
  const { phone, password, pinNumber, ...rest } = payload;
  const isUserExist = await User.findOne({ phone: phone });
  if (isUserExist) {
    throw new Error("User Already Exist");
  }

  const hashPassword = await bcryptjs.hash(
    password as string,
    Number(envVars.BCRYPT_SALT_ROUND)
  );
  const hashPin = await bcryptjs.hash(
    pinNumber as string,
    Number(envVars.BCRYPT_SALT_ROUND)
  );

  const user = await User.create({
    phone: phone,
    password: hashPassword,
    pinNumber: hashPin,
    createdBy: Role.USER,
    ...rest,
  });
  return user;
};

export const UserServices = {
  createUser,
};
