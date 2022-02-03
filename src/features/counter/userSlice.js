import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: null, user: null }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    //reducer to add authentication token
    addToken(state, action) {
      state.token = action.payload
    },

    //reducer to add user profile
    addUser(state, action) {
      state.user = action.payload
    }
  }
})

export const { addToken, addUser } = userSlice.actions

export default userSlice.reducer