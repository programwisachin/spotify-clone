import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/counter/userSlice'
import songReducer from '../features/counter/songSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer
  },
})