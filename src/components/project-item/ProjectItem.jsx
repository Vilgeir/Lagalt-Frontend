import React, { useState } from "react"
import DetailedItem from "../detailed-item/DetailedItem"
import "./project-item.css"

const ProjectItem = (prop) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDetails = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			{isOpen && <DetailedItem handleClose={toggleDetails} {...prop} />}
			<main id="project-item-container">
				<header id="item-header">
					<h3 id="project-title">{prop.projectTitle}</h3>
					<button id="join-button">Bli med</button>
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
