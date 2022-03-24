const apiKey = "https://lagalt.azurewebsites.net/api/Users/"

const checkForUser = async (user) => {
	try {
		const response = await fetch(`${apiUrl}${user.uid}`)
		if (!response.ok) {
			throw new Error("Could not complete request")
		}
		const data = await response.json()

		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}

export const createUser = async (user) => {
	try {
		const response = await fetch(apiKey, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: user.uid,
				projects: [],
				skills: [],
				userName: user.displayName,
				email: user.email,
				userPhoto: user.photoURL,
			}),
		})
		if (!response.ok) {
			throw new Error("could not create project.")
		}

		const data = await response.json
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}

export const loginUser = async (user) => {
	const [checkError, loginUser] = await checkForUser(user)

	if (checkError !== null) {
		return [checkError, null]
	}
	if (loginUser.length > 0) {
		return [null, loginUser.pop()]
	}
	return await createUser(user)
}
