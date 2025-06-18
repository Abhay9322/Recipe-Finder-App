import React from 'react'

function RecipeCard({ recipe }) {
  return (
    <div style={{ border: '1px solid gray', margin:'10px', padding:'10px' }}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} width="200" alt={recipe.title} />
        <p><strong>Calories:</strong> {recipe.calories}</p>

        <ul>
            {recipe.ingredients?.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

    </div>
  )
}

export default RecipeCard;
