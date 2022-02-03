import React, { useEffect } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDispatch, useSelector } from 'react-redux'
import { addToken } from './features/counter/userSlice'
import { addUser } from './features/counter/userSlice'
import { addPlaylist } from './features/counter/songSlice'
import { addTopTrack } from './features/counter/songSlice'

function App() {

  const dispatch = useDispatch()

  let authToken = useSelector(state => state.user.token)
  const spotify = new SpotifyWebApi()

  useEffect(() => {
    const _token = window.location.hash.substring(1).split('&')[0].split('=')[1]  //extract authentication token from the url
    window.location.hash = ""

    if (_token) {
      dispatch(addToken(_token))  //store authentication token in redux store
      spotify.setAccessToken(_token)  //set authentication token in SpotifyWebApi

      //function to get user playlist and store it in redux store
      spotify.getUserPlaylists().then((playlist) => {
        dispatch(addPlaylist(playlist))
      })

      //function to get user profile and store it in redux store
      spotify.getMe().then((profile) => {
        dispatch(addUser(profile))
      })

      //function to get user top tracks and store it in redux store
      spotify.getMyTopTracks().then((topTrack) => {
        dispatch(addTopTrack(topTrack))
      })
    }
  }, [dispatch])

  return (
    <div>
      {!authToken ? <Login /> : <Home/>}
    </div>
  )
}

export default App;
