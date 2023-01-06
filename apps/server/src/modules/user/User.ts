export type UserDataType = {
  id: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
  removed_at: Date;
  created_at: Date;
  updated_at: Date;
};

export class User {
  id: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(data: UserDataType) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.role = data.role;
    this.active = data.active;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
