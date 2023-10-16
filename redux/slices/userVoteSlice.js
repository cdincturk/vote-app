// slices/userVoteSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userVoteSlice = createSlice({
  name: "userVotes",
  initialState: {},
  reducers: {
    addVote: (state, action) => {
      console.log("action", action);
      console.log("state", state);

      const { userId } = action.payload;
      state[userId] = (state[userId] || 0) + 1;
    },
  },
});

export const { addVote } = userVoteSlice.actions;
export default userVoteSlice.reducer;
