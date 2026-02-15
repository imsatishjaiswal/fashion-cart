// import mongoose from "mongoose";
// import { env } from "./env.config";
// export const connectDB = async (): Promise<void> => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI as string);

//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("DB Error:", error);
//     process.exit(1);
//   }
// };
// import mongoose from "mongoose";
// import { env } from "./env.config";

// export const connectDB = async (): Promise<void> => {
//   try {

//     await mongoose.connect(env.MONGO_URI, {
//       dbName: "fashioncartDB",
//     });

//     console.log("MongoDB Connected");

//   } catch (error) {

//     console.error("DB Error:", error);
//     process.exit(1);

//   }
// };

import mongoose from "mongoose";
import { env } from "./env.config";

let isConnected = false;

export const connectDB = async (): Promise<void> => {

  if (isConnected) return;

  try {

    const db = await mongoose.connect(env.MONGO_URI);

    isConnected = !!db.connections[0]?.readyState;

    console.log("MongoDB Connected");

  } catch (error) {

    console.error("DB Error:", error);

  }

};
