import React, { useState } from "react"
import { useForm } from "react-hook-form"
//import { getProject } from "../api/get-project"
import { updateProject } from "../api/update-project"
import "./Create.css"
const UpdateProject = (data) => {
	//prop should be response from get request to project with id
	const { register, handleSubmit } = useForm()
	const [loading, setLoading] = useState(false)

	//Commented functions under saved until get functionality is done

	/*const project = async () => {
		const [error, response] = await getProject(101)
		data = response
		console.log(data)

		if (error) {
			console.log(error)
		}
	}*/
	//hardcoded data variable  .works but need get function to work
	/*const data = {
		projectId: 101,
		projectTitle: "GitGudHub",
		description: "Github for å bli god i forskjellige ting og tang.",
		photo:
			"https://images.unsplash.com/photo-1611698529145-9fabdd4720c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
		progress: "development",
		field: 1,
		skills: [8, 9],
		users: [1],
		projectLeaderIds: [1],
	}*/

	const onSubmit = async ({ ...register }) => {
		//Setting variables not in form (not supposed to be changed)
		register.projectId = data.projectId
		register.projectLeaderIds = data.projectLeaderIds
		register.users = data.users
		let skillsTemp = Array.from(
			document.querySelectorAll("input[name='skills']:checked")
		).map((elem) => elem.value)
		let skills = skillsTemp.map(Number)

		setLoading(true)
		const [error] = await updateProject(register, skills)
		if (error !== null) {
			console.log(error)
		}
		setLoading(false)
		alert("project updated?")
	}

	return (
		<main id="create-container">
			<p id="create-intro">Prosjekt-innstillinger</p>
			<form id="user-form" onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<div>
						<label className="create-headline" htmlFor="projectTitle">
							Hva er tittelen på prosjektet?
						</label>
						<input
							className="create-input"
							defaultValue={data.projectTitle}
							{...register("projectTitle")}
						></input>
					</div>
					<div>
						<label className="create-headline" htmlFor="description">
							Beskriv prosjektet
						</label>
						<textarea
							className="create-input"
							defaultValue={data.description}
							{...register("description")}
						></textarea>
					</div>
					<div>
						<label className="create-headline" htmlFor="progress">
							Status
						</label>
						<input
							className="create-input"
							defaultValue={data.progress}
							{...register("progress")}
						></input>
					</div>
					<div>
						<label className="create-headline" htmlFor="photo">
							Bilde
						</label>
						<input
							className="create-input"
							defaultValue={data.photo}
							{...register("photo")}
						></input>
					</div>
					<div id="checkbox-container">
						<div>
							<input
								id="redigering-checkbox"
								type="checkbox"
								name="skills"
								value="1"
							></input>
							<label htmlFor="redigering-checkbox">Redigering</label>
						</div>
						<div>
							<input
								id="filming-checkbox"
								type="checkbox"
								name="skills"
								value="2"
							></input>
							<label htmlFor="filming-checkbox">Filming</label>
						</div>
						<div>
							<input
								id="lydopptak-checkbox"
								type="checkbox"
								name="skills"
								value="3"
							></input>
							<label htmlFor="lydopptak-checkbox">Lydopptak</label>
						</div>
						<div>
							<input
								id="fotografi-checkbox"
								type="checkbox"
								name="skills"
								value="4"
							></input>
							<label htmlFor="fotografi-checkbox">Fotografi</label>
						</div>
						<div>
							<input
								id="instrument-checkbox"
								type="checkbox"
								name="skills"
								value="5"
							></input>
							<label htmlFor="instrument-checkbox">Instrument</label>
						</div>
						<div>
							<input
								id="synging-checkbox"
								type="checkbox"
								name="skills"
								value="6"
							></input>
							<label htmlFor="synging-checkbox">Synging</label>
						</div>
						<div>
							<input
								id="spill-utvikling-checkbox"
								type="checkbox"
								name="skills"
								value="7"
							></input>
							<label htmlFor="spill-utvikling-checkbox">Spill-utvikling</label>
						</div>
						<div>
							<input
								id="spill-design-checkbox"
								type="checkbox"
								name="skills"
								value="8"
							></input>
							<label htmlFor="spill-design-checkbox">Spill-design</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="web-utvikling-checkbox"
								name="skills"
								value="9"
							></input>
							<label htmlFor="web-utvikling-checkbox">Web-utvikling</label>
						</div>
						<div>
							<input
								id="web-design-checkbox"
								type="checkbox"
								name="skills"
								value="10"
							></input>
							<label htmlFor="web-design-checkbox">Web-design</label>
						</div>
					</div>
				</fieldset>
				<fieldset className="create-select">
					<span className="create-headline">Velg en kategori</span>
					<select
						className="create-input-select"
						defaultValue={data.fieldId}
						{...register("fieldId")}
					>
						<option value="1">Music</option>
						<option value="2">Film</option>
						<option value="3">Game-development</option>
						<option value="4">Web-development</option>
					</select>
				</fieldset>
				<div id="create-save-box">
					<button id="create-save" type="submit" disabled={loading}>
						Oppdater
					</button>
				</div>
			</form>
		</main>
	)
}

export default UpdateProject
