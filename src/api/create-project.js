export const createProject = async (formData, skills, user) => {
	try {
		const response = await fetch(
			"https://lagalt.azurewebsites.net/api/Projects",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					projectTitle: formData.projectTitle,
					description: formData.description,
					photo: formData.photo,
					progress: "founding",
					users: [user.uid],
					skills: skills,
					projectLeaderIds: [user.uid],
					fieldId: parseInt(formData.fieldId),
				}),
			}
		)
		if (!response.ok) {
			console.log(response)
			throw new Error(response.error)
		}

		const data = await response.json
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}
