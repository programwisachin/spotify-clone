import React from 'react'
import spotifyImage from './Spotify_Logo_RGB_Green.png'
import './Login.css'

//Authentication URI to get authentication token
const authURI = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_API_KEY}&response_type=token&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-private%20user-read-email%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state`

const Login = () => {
    return (
        <div className='login'>
            <img src={spotifyImage} alt="spotify" className='login_img' />
            <a href={authURI}><button className='login_btn'>Login</button></a>
        </div>
    )
}

export default Login