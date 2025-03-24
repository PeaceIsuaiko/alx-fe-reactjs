import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipe data:", error));
      setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
            <a href="#" className="text-black-500 hover:underline mt-2 inline-block">View Recipe</a>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

