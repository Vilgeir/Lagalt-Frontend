import { Route } from "react-router-dom"
import { getProject } from "../../api/get-project"
Route

const ProjectSettingsButton = (projectId) => {
	projectId = 2
	const get = async () => {
		const [error, response] = await getProject(projectId)
		console.log(response)

		if (error) {
			console.log(error)
		}
	}
	return (
		<div onClick={get}>
			<span className="material-icons">settings</span>
		</div>
	)
}

export default ProjectSettingsButton
