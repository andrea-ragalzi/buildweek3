import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import experienceReducer from "./../reducers/experienceReducer";


const allReducers = combineReducers({
  experience: experienceReducer,
});
export const store = configureStore({
  reducer: allReducers,
});

export type AppDispatch = typeof store.dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
