import express from "express";
import authRoutes from "./modules/auth/auth.routes";
const cors = require('cors');

const app = express();
// Allow requests from your frontend (React, Angular, etc.)
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));



app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
