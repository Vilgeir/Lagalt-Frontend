export const createProject = async (formData) => {
	try {
		const response = await fetch(
			"https://lagalt.azurewebsites.net/api/Projects",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					projectTitle: formData.projectTitle,
					description: formData.description,
					progress: "founding",
				}),
			}
		)
		if (!response.ok) {
			throw new Error("could not create project.")
		}

		const data = await response.json
		return [null, data]
	} catch (error) {
		return [error.message, []]
	}
}
