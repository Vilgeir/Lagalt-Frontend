const apiUrl = "https://lagalt.azurewebsites.net/api/Projects/"

export const getAllTasks = async () => {
	try {
		const response = await fetch(apiUrl)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const taskData = await response.json()
		return [null, taskData]
	} catch (error) {
		console.log(error)
	}
}
