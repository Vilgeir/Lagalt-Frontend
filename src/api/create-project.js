export const createProject = async (formData, skills, user) => {
	console.log(skills)
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
					fieldId: parseInt(formData.fieldId),
					skills: skills,
					users: [user.uid],
					gitRepo: formData.gitRepoLink,
				}),
			}
		)
		console.log(
			JSON.stringify({
				projectTitle: formData.projectTitle,
				description: formData.description,
				photo: formData.photo,
				progress: "founding",
				field: parseInt(formData.fieldId),
				skills: [1],
				users: [user.uid],
				gitRepo: formData.gitRepoLink,
			})
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
