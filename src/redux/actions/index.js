export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_JOBS = "SET_JOBS";
export const SET_QUERY = "SET_QUERY";

export const addToFavoritesAction = (companyName) => ({ type: ADD_TO_FAVOURITES, payload: companyName });
export const removeToFavoritesAction = (companyName) => ({ type: REMOVE_FROM_FAVOURITES, payload: companyName });
export const setQueryAction = (query) => ({ type: SET_QUERY, payload: query });

export const getJobs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SET_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
