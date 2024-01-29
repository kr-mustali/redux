import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "./bugReducer";

export const store = configureStore({
  reducer: {
    bugReducer,
  },
});

export default store;
