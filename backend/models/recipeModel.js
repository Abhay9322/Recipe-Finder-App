import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    calories: Number,
    ingredients: [String], 
    mealType: String
})

const Recipe = mongoose.Model('Recipe',recipeSchema);

export default Recipe;
