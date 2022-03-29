import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { createProject } from "../api/create-project"
import { useUser } from "../AuthContext/AuthContext"
import "./Create.css"

const Create = () => {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()
	const [loading, setLoading] = useState(false)
	const { user } = useUser()

	const onSubmit = async ({ ...register }) => {
		let skillsTemp = Array.from(
			document.querySelectorAll("input[name='skills']:checked")
		).map((elem) => elem.value)
		let skills = skillsTemp.map(Number)

		setLoading(true)
		const [error] = await createProject(register, skills, user)
		if (error !== null) {
			alert(error + "\n Noe gikk feil, vennligst prøv igjen senere.")
		} else {
			setLoading(false)
			alert(
				"Prosjektet ble opprettet!\nDu vil nå bli sendt tilbake til hjemmesiden"
			)
			navigate("/")
		}
	}

	return (
		<main id="create-container">
			<p id="create-intro">Lag nytt prosjekt</p>
			<form id="user-form" onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<div>
						<label className="create-headline" htmlFor="projectTitle">
							Hva er tittelen på prosjektet?
						</label>
						<input
							className="create-input"
							placeholder="Tittel"
							{...register("projectTitle", { required: true })}
						></input>
					</div>
					<div>
						<label className="create-headline" htmlFor="description">
							Beskriv prosjektet
						</label>
						<textarea
							className="create-input"
							placeholder="Beskrivelse"
							{...register("description", { required: true })}
						></textarea>
					</div>
					<div>
						<label className="create-headline" htmlFor="gitRepoLink">
							Git repo
						</label>
						<input
							className="create-input"
							placeholder="Git repo"
							{...register("gitRepoLink", { required: true })}
						></input>
					</div>
					<div>
						<label className="create-headline" htmlFor="photo">
							Bilde
						</label>
						<input
							className="create-input"
							placeholder="www.example.com"
							{...register("photo", { required: true })}
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
								id="web-utvikling-checkbox"
								type="checkbox"
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
						defaultValue="0"
						{...register("fieldId", { required: true })}
					>
						<option value="0" disabled hidden>
							Velg
						</option>
						<option value="1">Music</option>
						<option value="2">Film</option>
						<option value="3">Game-development</option>
						<option value="4">Web-development</option>
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
