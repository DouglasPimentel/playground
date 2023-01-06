import bcrypt from "bcrypt";

export default function comparePassword(
  password: string,
  userPassword: string,
): boolean {
  return bcrypt.compareSync(password, userPassword);
}
