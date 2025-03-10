import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', ingredients: 'Pasta, Egg, Bacon', time: '20 min' },
    { id: 2, title: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', time: '30 min' },
  ],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  getFilteredRecipes: () => {
    return useRecipeStore.getState().recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(useRecipeStore.getState().searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
