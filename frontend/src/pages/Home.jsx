import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

function Home() {

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [mealType, setMealType] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const fetchRecipes = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/api/recipes`,
                {
                    params:{ query,mealType }
                })

            setRecipes(res.data);
            setLoading(false);

        } catch (err) {
            setError('Failed to fetch recipes');
            setLoading(false);
        }
    }

    useEffect(() => {
      fetchRecipes();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchRecipes();
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <select onChange={(e) => setMealType(e.target.value)}>
            <option value="">All</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        <button type='submit'>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {recipes.map((r,i) => <RecipeCard key={i} recipe={r} />)}
      </div>
    </div>
  )
}

export default Home;
