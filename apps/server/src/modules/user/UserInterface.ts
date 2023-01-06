import { Document } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}
