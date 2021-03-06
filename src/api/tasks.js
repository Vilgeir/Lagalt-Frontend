const apiUrl = "https://lagalt.azurewebsites.net/api/Projects/"
const searchUrl = "https://lagalt.azurewebsites.net/api/Projects/name"

export const searchProject = async (name) => {
	try {
		const response = await fetch(`${searchUrl}/${name}`)
		if (!response.ok) {
			throw new Error("Could not find the project")
		}
		const results = await response.json()
		return [null, [results]]
	} catch (error) {
		console.log(error)
	}
}

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
export const getFilteredCategory = async (fieldId) => {
	try {
		const response = await fetch(`${apiUrl}?FieldId=${fieldId}`)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}

// export const getFilm = async () => {
// 	try {
// 		const response = await fetch(filmUrl)
// 		if (!response.ok) {
// 			throw new Error("Could not complete request")
// 		}
// 		const { results } = await response.json()
// 		return [null, results]
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// export const getWeb = async () => {
// 	try {
// 		const response = await fetch(webUrl)
// 		if (!response.ok) {
// 			throw new Error("Could not complete request")
// 		}
// 		const { results } = await response.json()
// 		return [null, results]
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// export const getGame = async () => {
// 	try {
// 		const response = await fetch(gameUrl)
// 		if (!response.ok) {
// 			throw new Error("Could not complete request")
// 		}
// 		const { results } = await response.json()
// 		return [null, results]
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
