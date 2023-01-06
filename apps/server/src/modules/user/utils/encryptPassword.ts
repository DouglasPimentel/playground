import bcrypt from "bcrypt";

export default function encryptPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}
