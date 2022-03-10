import React from "react"
import "./project-item.css"

const ProjectItem = (prop) => {
	return (
		<>
			<main id="project-item-container">
				<header id="item-header">
					<h3 id="project-title">{prop.title}</h3>
					<button id="join-button">Bli med</button>
				</header>
				<div id="item-body" onClick={prop.handleOpen}>
					<img id="item-img" src="/images/no-image.jpg"></img>
					<div id="description">
						<span>{prop.description}</span>

						<div id="tags">
							<span className="">gitRepo</span>
							<span className="">Tags Tags Tags</span>
						</div>
					</div>
				</div>
				<div className="">
					<button>contribute</button>
					<span className="">Meldinger</span>
				</div>
			</main>
		</>
	)
}

export default ProjectItem
