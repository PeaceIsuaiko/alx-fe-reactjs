import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl font-semibold mt-10">Recipe not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        {/* Ingredients Section */}
        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc pl-6 mt-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>

        {/* Cooking Instructions */}
        <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal pl-6 mt-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700 mb-2">{step}</li>
          ))}
        </ol>

        <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
