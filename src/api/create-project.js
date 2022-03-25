export const createProject = async (formData, skills) => {
	try {
		const response = await fetch(
			"https://lagalt.azurewebsites.net/api/Projects/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					projectTitle: formData.projectTitle,
					description: formData.description,
					photo: formData.photo,
					progress: "founding",
					users: [1],
					skills: skills,
					projectLeaderIds: [1],
					fieldId: parseInt(formData.fieldId),
				}),
			}
		)
		if (!response.ok) {
			console.log(response)
			throw new Error(response.error)
		}

		const data = await response.json
		console.log(data)
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}
