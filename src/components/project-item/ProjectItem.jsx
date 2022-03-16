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
					<h3 id="project-title">{prop.title}</h3>
					<button id="join-button">Bli med</button>
				</header>
				<div id="item-body" onClick={toggleDetails}>
					<img id="item-img" src="/images/no-image.jpg"></img>
					<div id="description">
						<span>{prop.description}</span>
						<div id="tags">
							<div id="tag-container">
								{prop.tags.map((tag, key) => (
									<div className="tag-box" key={key}>
										{tag}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<a href={prop.gitlink} className="">
					{prop.gitlink}
				</a>
			</main>
		</>
	)
}

export default ProjectItem
