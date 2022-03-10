import React from "react"
import "./project-item.css"

const ProjectItem = () => {
	return (
		<>
			<main className="project-item-container">
				<h3 className="projectTitle">title</h3>
				<p className="description">description</p>
				<span className=""> tags </span>
				<div className="">image</div>

				<div className="">gitRepo</div>
				<div className="">messageBoard</div>
				<div className="">
					<button>contribute</button>
				</div>
			</main>
		</>
	)
}

export default ProjectItem
