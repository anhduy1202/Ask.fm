import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullPost: 
  {
      state: false
  }
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
      setFullPost: (state, action) => {
          state.fullPost.state = action.payload
      }
  }
});

export const {
 setFullPost
} = navSlice.actions;
export default navSlice.reducer;
