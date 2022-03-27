//import { Route } from "react-router-dom"
import { getProject } from "../../api/get-project"
import "./ProjectSettingsButton.css"

const ProjectSettingsButton = (projectId) => {
	const get = async () => {
		const [error, response] = await getProject(projectId.projectId)
		console.log(response)

		if (error) {
			console.log(error)
		}
	}
	return (
		<div id="project-settings-button" onClick={get}>
			<span className="material-icons">settings</span>
		</div>
	)
}

export default ProjectSettingsButton
