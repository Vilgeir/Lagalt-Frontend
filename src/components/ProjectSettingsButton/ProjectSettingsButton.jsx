//import { Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getProject } from "../../api/get-project"
import "./ProjectSettingsButton.css"

const ProjectSettingsButton = (projectId) => {
	const navigate = useNavigate()
	const get = async () => {
		const [error, response] = await getProject(projectId.projectId)
		if (error) {
			console.log(error)
		}
		navigate("/updateProject", { state: response })
	}
	return (
		<div id="project-settings-button" onClick={get}>
			<span className="material-icons">settings</span>
		</div>
	)
}

export default ProjectSettingsButton
