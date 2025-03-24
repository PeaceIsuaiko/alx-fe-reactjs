import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.split(".")[0] + ".", // First sentence as summary
      image: "https://via.placeholder.com/150",
      ingredients: ingredients.split(","),
      steps: steps.split("."),
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Ingredients (comma separated)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
