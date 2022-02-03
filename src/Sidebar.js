import React from 'react'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import AddBoxIcon from '@mui/icons-material/AddBox'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SidebarSection from './SidebarSection'
import SpotifyIcon from './Spotify_Logo_RGB_White.png'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    let playlists = useSelector(state => state.song) //get user playlist from redux store

    return (
        <div className='sidebar'>
            <img src={SpotifyIcon} alt="icon" className='sidebar_icon' />
            <SidebarSection Icon={HomeOutlinedIcon} desc="Home" />
            <SidebarSection Icon={SearchOutlinedIcon} desc="Search" />
            <SidebarSection Icon={LibraryMusicOutlinedIcon} desc="Library" />
            <br />
            <SidebarSection Icon={AddBoxIcon} desc="Create library" />
            <SidebarSection Icon={FavoriteIcon} desc="Liked Songs" />

            <hr className='sidebar_hr' />
            <br />
            
            {playlists.status === 'success' && playlists.myPlaylist?.items?.map((playlist) => {
                return <SidebarSection desc={playlist?.name} />
            })}
        </div>
    )
}

export default Sidebar
