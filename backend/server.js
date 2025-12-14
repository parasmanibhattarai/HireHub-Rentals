import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import protectedRoutes from './routes/protected.js';

dotenv.config();

const app = express();

app.use(express.json());


// Get the hire data from hirepose
const hirepose = axios.create({
  baseURL: process.env.HIREPOSE_BASE_URL,
  headers: {
    "Authorization": `Bearer ${process.env.HIREPOSE_API_KEY}`,
    "Content-Type": "application/json"
  }
});

export const getCustomers = async () => {
  const response = await hirepose.get("/customers"); // update endpoint as needed
  return response.data;
};

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log('Server running on port', process.env.PORT || 4000);
});