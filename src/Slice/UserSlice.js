import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
      value: null, // Assume null is the initial value when there's no user
    },
    reducers: {
      userData: (state, action) => {
        const { uid, email, displayName } = action.payload; // Extract necessary serializable data
        state.value = { uid, email, displayName }; // Save only serializable data
      },
    },
  });
  
  export const { userData } = UserSlice.actions;
  export default UserSlice.reducer;
  