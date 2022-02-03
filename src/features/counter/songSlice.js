import { createSlice } from '@reduxjs/toolkit'

const initialState = { status: 'idle', myPlaylist: {}, topTrack: null }

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {

    //reducer to add playlist
    addPlaylist(state, action) {
      state.myPlaylist = action.payload
      state.status = 'success'
    },
    //reducer to add top tracks
    addTopTrack(state, action) {
      state.topTrack = action.payload
      state.status = 'success'
    }
  }
})

export const { addPlaylist, addTopTrack } = songSlice.actions

export default songSlice.reducer