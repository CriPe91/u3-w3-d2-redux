export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const addToFavoritesAction = (companies) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: [companies],
  };
};
