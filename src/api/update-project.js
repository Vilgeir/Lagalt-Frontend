export const updateProject = async (formData, skills) => {
	try {
		const response = await fetch(
			"https://lagalt.azurewebsites.net/api/Projects/" + formData.projectId,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					projectId: formData.projectId,
					projectTitle: formData.projectTitle,
					description: formData.description,
					photo: formData.photo,
					progress: formData.progress,
					field: parseInt(formData.fieldId),
					skills: skills,
					users: formData.users,
					projectLeaderIds: formData.projectLeaderIds,
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
