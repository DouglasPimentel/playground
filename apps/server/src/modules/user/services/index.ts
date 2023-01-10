import UserModel from "../UserModel";
import { UserInterface } from "../UserInterface";
import encryptPassword from "../utils/encryptPassword";
import logger from "../../../middlewares/logger";

export type UserDataRequest = {
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
};

export async function findAll(): Promise<UserInterface[]> {
  try {
    const users = await UserModel.find({}).sort({ created_at: -1 });

    return users;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Unable to list all users");
  }
}

export async function findById(id: string): Promise<UserInterface | null> {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Could not find the user");
  }
}

export async function findByEmail(
  email: string,
): Promise<UserInterface | null> {
  try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Could not find the user");
  }
}

export async function create(
  name: string,
  email: string,
  password: string,
): Promise<UserInterface> {
  const hashPassword = encryptPassword(password);

  try {
    const newUser = await new UserModel({
      name,
      email,
      password: hashPassword,
      role: "admin",
      active: true,
    }).save();
    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Unable to register a new user");
  }
}

export async function update(
  id: string,
  data: Partial<UserDataRequest>,
): Promise<UserInterface | null> {
  try {
    const user = await UserModel.findOneAndUpdate({ _id: id }, data);

    return user;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Could not update user data");
  }
}
