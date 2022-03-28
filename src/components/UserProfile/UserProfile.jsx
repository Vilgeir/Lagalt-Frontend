import React, { useEffect, useState } from "react"
import { UserSettings } from "../user-settings/UserSettings"
import "./UserProfile.css"
import { useUser } from "../../AuthContext/AuthContext"
import { loginUser } from "../../api/create-user"

export const UserProfile = (prop) => {
	const [showModal, setShowModal] = useState(false)
	const [profile, setProfile] = useState([])

	const handleClick = () => {
		setShowModal(!showModal)
	}

	const { user } = useUser()

	useEffect(() => {
		const makeUser = async () => {
			const [error, userResponse] = await loginUser(user)
			if (error !== null) {
				console.log(error)
			}
			if (userResponse !== null) {
				//console.log(userResponse)
				setProfile(userResponse)
			}
		}
		makeUser()
	}, [])

	console.log(profile)
	return (
		<>
			<section id="profile-container" className="main-content">
				<div id="profile-header-container">
					<div id="profile-avatar-container">
						<img id="avatar" src={user.photoURL}></img>
						<h1>{user.displayName}</h1>
					</div>
					<div id="profile-settings-button" onClick={handleClick}>
						<span className="material-icons">Innstillinger</span>
					</div>
				</div>
				<h2>Om meg</h2>
				<p>{profile.userId}</p>
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
						{profile.projects.map((projects, key) => (
							<span key={key}>{projects}</span>
						))}
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
