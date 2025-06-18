import axios from 'axios';
import Recipe from '../models/recipeModel';

export const getRecipes = async (req,res) => {
    const { query, mealType } = req.query;

    try {
        
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`,
            {
                params: {
                    query,
                    number: 10,
                    addRecipeInformation: true,
                    apikey: process.env.SPOONACULAR_API_KEY,
                    type: mealType
                }
            });

        const data = response.data.results;

        const formatted = data.map(item => ({
            title: item.title,
            image: item.image,
            calories: Math.round(item.nutrition?.nutrition?.[0]?.amount || 0),
            ingredients: item.extendedIngredients?.map(i => i.original),
            mealType: mealType
        }));

        res.json(formatted);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}