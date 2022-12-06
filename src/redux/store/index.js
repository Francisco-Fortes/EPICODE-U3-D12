import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "../reducers/job";
import favouriteReducer from "../reducers/favourite";

const bigReducer = combineReducers({
  favourite: favouriteReducer, //Here we are inside of the favourite slice
  job: jobReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
