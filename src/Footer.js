import React from "react"
import "./Footer.css"
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import ShuffleIcon from "@mui/icons-material/Shuffle"
import LoopIcon from "@mui/icons-material/Loop"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined"
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined"
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined"
import { useSelector } from "react-redux"
import { Slider } from "@mui/material"

const Footer = () => {
	const currentSong = useSelector((state) => state.song.topTrack) //get top tracks from the redux store

	return (
		<div className="footer">
			<div className="leftSide">
				<img
					src={currentSong?.items[0]?.album?.images[2]?.url}
					alt="img"
				/>
				<div className="leftSide_desc">
					<h5>{currentSong?.items[0]?.name}</h5>
					<h6>{currentSong?.items[0]?.artists[0]?.name}</h6>
				</div>
				<FavoriteBorderOutlinedIcon />
			</div>
			<div className="center">
				<div className="center_btns">
					<ShuffleIcon />
					<SkipPreviousIcon />
					<PlayCircleFilledWhiteIcon />
					<SkipNextIcon />
					<LoopIcon />
				</div>
				<div className="center_slider">
					<Slider aria-label="Volume" value={30} size="small" />
				</div>
			</div>
			<div className="rightSide">
				<QueueMusicOutlinedIcon />
				<DevicesOutlinedIcon />
				<VolumeUpOutlinedIcon />
			</div>
		</div>
	)
}

export default Footer
