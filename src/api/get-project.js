const apiUrl = "https://lagalt.azurewebsites.net/api/Projects/"

export const getProject = async (projectId) => {
	try {
		const response = await fetch(`${apiUrl}${projectId}`)
		if (!response.ok) {
			throw new Error("Could not update the project")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error + "get-project error")
	}
}
