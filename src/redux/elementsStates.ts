// Redux
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  display: false
};

// Initial state and reducers
const sidebarSlice = createSlice({
  name: "sidebarElement",
  initialState: initialState,
  reducers: {
    // Add your non-async reducers here
    toggle: (state, action) => {
      state.display = action.payload;
    }
  },
  extraReducers: {}
});

// Each case under reducers becomes an action
export const {
  toggle
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
