import { useRecipeStore } from '../store/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();

  const isFavorite = favorites.includes(recipeId);

  return (
    <button onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}>
      {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
