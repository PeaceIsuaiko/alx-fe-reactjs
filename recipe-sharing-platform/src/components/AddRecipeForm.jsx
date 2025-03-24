import React, { useState } from "react";

const AddRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!title) tempErrors.title = "Title is required";
    if (!ingredients) tempErrors.ingredients = "Ingredients are required";
    if (!steps) tempErrors.steps = "Steps are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
