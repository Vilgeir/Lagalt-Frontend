const apiKey = "https://lagalt.azurewebsites.net/api/Users"
//const api2 = "https://lagalt.azurewebsites.net/api/Users/01108712275"

const checkForUser = async (user) => {
	try {
		const response = await fetch(`${apiKey}/${user.uid}`)
		if (!response.ok) {
			throw new Error("Could not complete check")
		}
		const data = await response.json()

		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}

const createUser = async (user) => {
	try {
		console.log(user.displayName)
		const response = await fetch(apiKey, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: user.uid,
				projects: [],
				skills: [],
				userName: user.displayName,
				email: user.email,
				description: "",
				portfolio: "",
				userPhoto: user.photoURL,
				hidden: false,
			}),
		})
		if (!response.ok) {
			throw new Error("Could not create user " + user.displayName)
		}

		const data = await response.json
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}

export const loginUser = async (user) => {
	const [checkError, loginUser] = await checkForUser(user)

	console.log(Object.keys(loginUser).length)

	if (checkError !== null) {
		console.log("checkerror")
		return await createUser(user)
	}
	if (Object.keys(loginUser).length > 0) {
		return [null, loginUser]
	}
	console.log("trying to crate")
	return await createUser(user)
}
