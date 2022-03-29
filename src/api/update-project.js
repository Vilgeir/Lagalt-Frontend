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

export const updateParticipants = async (prop) => {
	try {
		const response = await fetch(
			"https://lagalt.azurewebsites.net/api/Projects/" + prop.projectId,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					projectId: prop.projectId,
					projectTitle: prop.projectTitle,
					description: prop.description,
					photo: prop.photo,
					progress: prop.progress,
					field: parseInt(prop.fieldId),
					skills: prop.skills,
					users: prop.users,
					projectLeaderIds: prop.projectLeaderIds,
				}),
			}
		)
		if (!response.ok) {
			throw new Error("add participant failed")
		}

		const data = await response.json
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}
