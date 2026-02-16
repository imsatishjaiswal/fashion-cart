import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id(id: any): unknown;
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
     address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model<IUser>("User", UserSchema);
