import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import queryReducer from "../reducers/queryReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  query: queryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
