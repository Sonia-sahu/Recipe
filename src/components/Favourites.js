import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Favourites = ({ savedItems, updateFavoriteStatus }) => {
  const [favorites, setFavorites] = useState(savedItems);

  // Update state when savedItems prop changes

  useEffect(() => {
    setFavorites(savedItems);
  }, [savedItems]);

  // const handleFavoriteStatusChange = async (id, isFavorite) => {
  //   try {
  //     // Update the backend and get the updated recipe
  //     const response = await fetch(`http://localhost:8080/api/recipes/favorite/${id}?isFavorite=${isFavorite}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ isFavorite }),
  //     });

  //     if (response.ok) {
  //       // Update the local state with the updated recipe
  //       const updatedRecipe = await response.json();
  //       setFavorites((prevFavorites) =>
  //         prevFavorites.map((recipe) =>
  //           recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  //         )
  //       );
  //     } else {
  //       console.error('Failed to update favorite status');
  //     }
  //   } catch (error) {
  //     console.error('Error updating favorite status:', error);
  //   }
  // };

  return (
    <div className='favourites-section'>
      {favorites.length === 0 ? (
        <p className='text-2xl text-center font-semibold text-violet-300 leading-normal py-8 lg:text-4xl'>
          Your favorite list is empty!
        </p>
      ) : (
        <>
          <p className='text-2xl text-center font-semibold text-violet-300 leading-normal py-8 lg:text-4xl'>
            Your favorite recipe{favorites.length > 1 && "s"}!
          </p>

          <div className='favourite-items-container container mx-auto flex justify-center flex-wrap gap-10 py-8'>
            {favorites.map((recipe) => (
              <Recipe
                key={recipe.id}
                recipe={recipe}
                // handleFavoriteStatusChange={handleFavoriteStatusChange}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favourites;
