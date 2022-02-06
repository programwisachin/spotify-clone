import React from "react"
import "./LowerBody.css"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { useSelector } from "react-redux"

const LowerBody = () => {
	const songs = useSelector((state) => state.song)

	//function to convert milliseconds to minutes and seconds
	function millisToMinutesAndSeconds(millis) {
		var minutes = Math.floor(millis / 60000)
		var seconds = ((millis % 60000) / 1000).toFixed(0)

		return seconds === 60
			? minutes + 1 + ":00"
			: minutes + ":" + (seconds < 10 ? "0" : "") + seconds
	}

	return (
		<div className="lowerBody">
			<div className="top_track">
				<MoreHorizIcon
					style={{ color: "#ffffffb3", height: "2em", width: "2em" }}
				/>
				<div className="track_desc">
					<h2>Top tracks this month</h2>
					<h6 className="heading">Only visible to you</h6>
				</div>
				{songs.status === "success" &&
					songs?.topTrack?.items.map((track, index) => {
						return (
							<div className="topTracks" key={index}>
								<div className="topTracks_firstPart">
									<h1>{index + 1}</h1>
									<img
										src={track?.album?.images[2]?.url}
										alt="img"
									/>
									<div className="topTracks_firstPart_desc">
										<h4>{track?.name}</h4>
										{track?.artists.map((artists,idx) => {
											return (
												<span key={idx}>{artists?.name} </span>
											)
										})}
									</div>
								</div>
								<h1 className="heading">{track?.name}</h1>
								<h1 className="heading">
									{millisToMinutesAndSeconds(track?.duration_ms)}
								</h1>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default LowerBody
