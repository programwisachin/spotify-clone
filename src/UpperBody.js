import React from "react"
import "./UpperBody.css"
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined"
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined"
import { useSelector } from "react-redux"

const UpperBody = () => {

	const user = useSelector(state => state.user.user) //get user profile from redux store

	return (
		<div className="upperBody">
			<header className="upper_head">
				<div className="head_icon">
					<ArrowCircleLeftOutlinedIcon
						style={{ height: "2em", width: "2em" }}
					/>
					<ArrowCircleRightOutlinedIcon
						style={{ height: "2em", width: "2em" }}
					/>
				</div>
				<div className="head_btn">
					<div className="btn_upgrade">Upgrade</div>
					<div className="btn_profile">Sachin</div>
				</div>
			</header>
			<div className="profile">
				<img src={user?.images[0].url} alt="profile" className="profile_image" />
				<div className="profile_description">
					<h6>PROFILE</h6>
					<h1>{user?.display_name}</h1>
					<h5>2 Public Playlists</h5>
				</div>
			</div>
		</div>
	)
}

export default UpperBody
