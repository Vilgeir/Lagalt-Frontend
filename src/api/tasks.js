const apiUrl = "https://lagalt.azurewebsites.net/api/Projects/"
const musicUrl = "https://lagalt.azurewebsites.net/api/Projects?FieldId=1"
const webUrl = "https://lagalt.azurewebsites.net/api/Projects?FieldId=4"
const filmUrl = "https://lagalt.azurewebsites.net/api/Projects?FieldId=2"
const gameUrl = "https://lagalt.azurewebsites.net/api/Projects?FieldId=3"

export const getAllTasks = async () => {
	try {
		const response = await fetch(apiUrl)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}

export const getMusic = async () => {
	try {
		const response = await fetch(musicUrl)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}

export const getFilm = async () => {
	try {
		const response = await fetch(filmUrl)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}

export const getWeb = async () => {
	try {
		const response = await fetch(webUrl)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}

export const getGame = async () => {
	try {
		const response = await fetch(gameUrl)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const { results } = await response.json()
		return [null, results]
	} catch (error) {
		console.log(error)
	}
}
