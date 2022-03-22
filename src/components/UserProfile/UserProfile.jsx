import React, { useState } from "react"
import { UserSettings } from "../user-settings/UserSettings"
import "./UserProfile.css"
import { useUser } from "../../AuthContext/AuthContext"

export const UserProfile = (prop) => {
	const [showModal, setShowModal] = useState(false)

	const handleClick = () => {
		setShowModal(!showModal)
	}

	const { user } = useUser()
	console.log(user)

	return (
		<>
			<section id="profile-container" className="main-content">
				<div id="profile-header-container">
					<div id="profile-avatar-container">
						<img id="avatar" src={user.photoURL}></img>
						<h1>{user.displayName}</h1>
					</div>
					<div id="profile-settings-button" onClick={handleClick}>
						<span className="material-icons">settings</span>
					</div>
				</div>
				<h2>Beskrivelse:</h2>
				<p>{prop.description}</p>
				<h2>Ferdigheter</h2>
				<div id="tag-container">
					{prop.skills.map((skill, key) => (
						<div className="tag-box" key={key}>
							{skill}
						</div>
					))}
				</div>
				<div id="profile-projects-container">
					<h2>Prosjekter</h2>
					<div>
						<span>Pågående:</span>
						<div id="profile-current-projects-container"></div>
					</div>
					<div>
						<span>Ferdige:</span>
						<div id="profile-closed-projects-container"></div>
					</div>
				</div>
			</section>
			{showModal && <UserSettings handleClose={handleClick} {...prop} />}
		</>
	)
}
