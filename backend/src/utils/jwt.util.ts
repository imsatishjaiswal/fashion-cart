import jwt from "jsonwebtoken";
import { env } from "../config/env.config";

export const generateToken = (id: string) => {

  return jwt.sign(

    { id },

    env.JWT_SECRET,

    { expiresIn: "1d" }

  );

};
