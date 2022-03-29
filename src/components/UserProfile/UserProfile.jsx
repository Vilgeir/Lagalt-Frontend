import React, { useEffect, useState } from "react"
import { UserSettings } from "../user-settings/UserSettings"
import "./UserProfile.css"
import { useUser } from "../../AuthContext/AuthContext"
import { loginUser } from "../../api/create-user"
import DetailedItem from "../detailed-item/DetailedItem"
import { getProject } from "../../api/get-project"

export const UserProfile = (prop) => {
	const [showModal, setShowModal] = useState(false)
	const [profile, setProfile] = useState([])
	const [loading, setLoading] = useState(true)
	const { user } = useUser()
	const [isOpen, setIsOpen] = useState(false)
	const [projectData, setProjectData] = useState()

	const toggleDetails = () => {
		setIsOpen(!isOpen)
	}

	const handleClick = () => {
		setShowModal(!showModal)
	}

	const openProject = async (projectId) => {
		const [error, project] = await getProject(projectId)

		if (error != null) {
			console.log(error)
		} else {
			setProjectData(project)
			setIsOpen(true)
		}
	}

	useEffect(() => {
		const makeUser = async () => {
			const [error, userResponse] = await loginUser(user)
			if (error !== null) {
				console.log(error)
			}
			if (userResponse !== null) {
				//console.log(userResponse)
				setProfile(userResponse)
				setLoading(false)
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
						<span className="material-icons">settings</span>
					</div>
				</div>
				<h2>Om meg</h2>
				{profile.description == "" ? (
					<p>Trykk på tannhjulet og lag en beskrivelse</p>
				) : (
					<p>{profile.description}</p>
				)}
				<h2>Ferdigheter</h2>
				<div id="tag-container">
					{prop.skills.map((skill, key) => (
						<div className="tag-box" key={key}>
							{skill}
						</div>
					))}
				</div>
				{loading ? (
					<p>no projects</p>
				) : (
					<>
						{isOpen && (
							<DetailedItem handleClose={toggleDetails} {...projectData} />
						)}
						<div id="profile-projects-container">
							<h2>Prosjekter</h2>
							<div>
								{profile.projects.map((projects, key) => (
									<>
										<p
											id="project-link"
											onClick={() => openProject(projects.projectId)}
											key={key}
										>
											{projects.projectTitle}
										</p>
									</>
								))}
								<div id="profile-current-projects-container"></div>
							</div>
						</div>
					</>
				)}
			</section>
			{showModal && (
				<UserSettings handleClose={handleClick} profile={profile} />
			)}
		</>
	)
}
