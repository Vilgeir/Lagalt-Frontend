import React, { useState } from "react"

import { ApprovalForm } from "../approval-form/ApprovalForm"
import "./project-item.css"

const ProjectItem = () => {

	const [displayForm , setDisplayForm] = useState(false);
	

	const ApprovalFormHandler = () =>{
		setDisplayForm(true)

	}

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
					<button onClick={ApprovalFormHandler}>contribute</button>
					{displayForm && <ApprovalForm/>}

				</div>
			</main>
		</>
	)
}

export default ProjectItem
