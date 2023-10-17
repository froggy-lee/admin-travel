import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./slide/user";

export const store = configureStore({
  reducer: {
    user: userReduce,
  },
  devTools: true,
});
