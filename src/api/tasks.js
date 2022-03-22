const apiUrl = "https://lagalt.azurewebsites.net/api/Projects/"

export const getAllTasks = async (offset, limit) => {
	try {
		const response = await fetch(`${apiUrl}?offset=${offset}&limit=${limit}`)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}
