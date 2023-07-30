import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import { pcBuilderReducer } from "./features/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pcBuilder: pcBuilderReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
