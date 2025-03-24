import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState } from "react";
import recipeData from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="p-4 bg-gray-200 text-center">
        <Link to="/" className="mr-4 text-blue-600">Home</Link>
        <Link to="/add-recipe" className="text-blue-600">Add Recipe</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
