const apiKey = "https://lagalt.azurewebsites.net/api/Users"

export const updateUser = async (registrer, user) => {
	try {
		console.log(user.profile.userName)
		const response = await fetch(`${apiKey}/${user.profile.userId}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: user.profile.userId,
				projects: user.profile.projects,
				skills: user.profile.skills,
				userName: user.profile.userName,
				email: user.profile.email,
				description: registrer.description,
				portfolio: "",
				userPhoto: user.profile.userPhoto,
				hidden: false,
			}),
		})
		if (!response.ok) {
			throw new Error("Could not update user " + user.userName)
		}

		const data = await response.json
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}
