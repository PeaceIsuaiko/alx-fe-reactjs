import React, { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setRecipes(recipeData); // Set data from the JSON file
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (recipes.length === 0) tempErrors.recipes = "No recipes available.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      {errors.recipes && <p className="text-red-500 text-center">{errors.recipes}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Recipe
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
