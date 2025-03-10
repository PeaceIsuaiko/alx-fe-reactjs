import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], 
  searchTerm: "",
  filteredRecipes: [], 

  // ✅ Function to update searchTerm and filter recipes
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),

  // ✅ Function to update recipes and refilter if necessary
  setRecipes: (newRecipes) => set((state) => ({
    recipes: newRecipes,
    filteredRecipes: newRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
