import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { createProject } from "../api/create-project"
import "./Create.css"

const Create = () => {
	const { register, handleSubmit } = useForm()
	const [loading, setLoading] = useState(false)

	const onSubmit = async ({ ...register }) => {
		setLoading(true)
		const [error] = await createProject(register)
		if (error !== null) {
			console.log(error)
		}
		setLoading(false)
		alert("project created?")
	}

	return (
		<main id="create-container">
			<p id="create-intro">Lag nytt prosjekt</p>
			<form id="item-create" onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<label className="create-headline" htmlFor="projectTitle">
						Hva er tittelen på prosjektet?
					</label>
					<input
						className="create-input"
						placeholder="Tittel"
						{...register("projectTitle")}
					></input>
					<label className="create-headline" htmlFor="description">
						Beskriv prosjektet
					</label>
					<textarea
						className="create-input"
						placeholder="Beskrivelse"
						{...register("description")}
					></textarea>
					<label className="create-headline" htmlFor="gitRepoLink">
						Git repo
					</label>
					<input
						className="create-input"
						placeholder="Git repo"
						{...register("gitRepoLink")}
					></input>

					<div>
						<input type="checkbox"></input>
						<label>Skole</label>
						<input type="checkbox"></input>
						<label>Underholdning</label>
						<input type="checkbox"></input>
						<label>Skill</label>
						<input type="checkbox"></input>
						<label>Skill</label>
						<input type="checkbox"></input>
						<label>Skill</label>
						<input type="checkbox"></input>
						<label>Skill</label>
					</div>
				</fieldset>
				<fieldset className="create-select">
					<span className="create-headline">Velg en kategori</span>
					<select className="create-input-select" {...register("field")}>
						<option>Velg</option>
						<option>Film</option>
						<option>Tv</option>
						<option>Web</option>
					</select>
				</fieldset>
				<div id="create-save-box">
					<button id="create-save" type="submit" disabled={loading}>
						Lagre
					</button>
				</div>
			</form>
		</main>
	)
}

export default Create
