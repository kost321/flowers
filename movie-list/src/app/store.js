import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movieList/redux/MovieListSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
