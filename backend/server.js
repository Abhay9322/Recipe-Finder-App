import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import recipeRoutes from './routes/recipeRoutes.js';


dotenv.config()

const app = express();
app.use(express.json());

connectDB();

app.use('/api/recipes',recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))