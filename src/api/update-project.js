//import { useEffect } from "react"

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

export const updateProjectTwo = async (prop, user) => {
	//let skillsArr = []
	let userArr = []

	const handleArray = () => {
		userArr.push(prop.users[0].userId)
		console.log(userArr)
		userArr.push(user.uid)
		console.log(userArr)
	}
	handleArray()
	console.log(prop.users)
	try {
		const response = await fetch(
			"https://lagalt.azurewebsites.net/api/Projects",
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					projectId: prop.projectId,
					projectTitle: prop.projectTitle,
					description: prop.description,
					photo: prop.photo,
					progress: prop.progress,
					fieldId: prop.field.fieldId,
					skills: [2],
					users: ["ZkrJ8CVSXnTfzocpNo8zANvkbB82"],
					gitRepo: "http://amani.net",
				}),
			}
		)
		console.log(
			JSON.stringify({
				projectId: prop.projectId,
				projectTitle: prop.projectTitle,
				description: prop.description,
				photo: prop.photo,
				progress: prop.progress,
				fieldId: prop.field.fieldId,
				skills: [2],
				users: ["ZkrJ8CVSXnTfzocpNo8zANvkbB82"],
				gitRepo: "http://amani.net",
			})
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
