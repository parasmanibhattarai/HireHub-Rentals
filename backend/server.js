import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import protectedRoutes from './routes/protected.js';
import cors from 'cors';

// Load .env from the backend folder regardless of cwd
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());


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
