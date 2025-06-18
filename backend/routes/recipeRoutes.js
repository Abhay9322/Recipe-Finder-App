import express from 'express';
import { getRecipes } from '../controllers/recipeController';

const router = express.Router();

router.get('/',getRecipes);

export default router;