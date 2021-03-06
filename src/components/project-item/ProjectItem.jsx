import React, { useState } from "react"
//import { useUser } from "../../AuthContext/AuthContext"
import DetailedItem from "../detailed-item/DetailedItem"
//import JoinButton from "../join-button/JoinButton"
import "./project-item.css"
//import NoImg from "../assets/no-image.jpg"

//import { updateParticipants } from "../../api/update-project"

const ProjectItem = (prop) => {
	const [isOpen, setIsOpen] = useState(false)
	//const [data, setData] = useState()
	//const { user } = useUser()

	const toggleDetails = () => {
		setIsOpen(!isOpen)
	}

	/* const handleJoin = async (prop, user) => {
		const [error, data] = await updateParticipants(prop, user)
		if (error != null) {
			console.log(error)
		} else {
			setData(data)
		}
	} */

	return (
		<>
			{isOpen && <DetailedItem handleClose={toggleDetails} {...prop} />}
			<main id="project-item-container">
				<header id="item-header">
					<h3 id="project-title">{prop.projectTitle}</h3>
					{/* {user && prop.users.map((x) => x.userId) != user.uid && (
						<JoinButton {...prop} />
					)} */}
				</header>
				<div id="item-body" onClick={toggleDetails}>
					<img id="item-img" src={prop.photo}></img>
					<div id="description">
						<span>{prop.description}</span>
						<div id="tags">
							<div id="tag-container">
								{prop.skills.map((skill, key) => (
									<div className="tag-box" key={key}>
										{skill.skillName}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* <a href={prop.gitlink} className="">
					{prop.gitlink}
				</a> */}
			</main>
		</>
	)
}

export default ProjectItem
