// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import userVoteReducer from "../slices/userVoteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userVotes: userVoteReducer,
  },
});
