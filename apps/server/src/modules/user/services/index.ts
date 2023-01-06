import UserModel from "../UserModel";
import { UserInterface } from "../UserInterface";
import encryptPassword from "../utils/encryptPassword";

export async function findAll(): Promise<UserInterface[]> {
  return await UserModel.find({}).sort({ created_at: -1 });
}

export async function findById(id: string): Promise<UserInterface | null> {
  const user = await UserModel.findById(id);
  return user;
}

export async function findByEmail(
  email: string,
): Promise<UserInterface | null> {
  const user = await UserModel.findOne({ email });
  return user;
}

export async function create(
  name: string,
  email: string,
  password: string,
): Promise<UserInterface> {
  const hashPassword = encryptPassword(password);

  const newUser = await new UserModel({
    name,
    email,
    password: hashPassword,
    role: "admin",
    active: true,
  }).save();
  return newUser;
}
