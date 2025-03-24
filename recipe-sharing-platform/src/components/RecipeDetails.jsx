import React from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="text-center text-red-500 text-xl mt-10">Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-lg mx-auto rounded-lg shadow-md" />
      <p className="text-lg text-gray-700 mt-4">{recipe.summary}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Instructions:</h2>
        <ol className="list-decimal list-inside text-gray-600">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mt-1">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
