import "./UserSettings.css"
import { updateUser } from "../../api/update-user"
import { useForm } from "react-hook-form"

export const UserSettings = (prop) => {
	const { register, handleSubmit } = useForm()

	const onSubmit = async ({ ...register }) => {
		const [error, updatedData] = await updateUser(register, prop)

		if (error != null) {
			console.log(error)
		} else {
			console.log(updatedData)
			window.location.reload(true)
		}
	}

	console.log(prop.profile)
	return (
		<div id="main-container">
			<section id="usersettings-container" className="main-content">
				<div id="usersettings-header">
					<h1>Legg til informasjon</h1>
					<div id="profile-settings-button" onClick={prop.handleClose}>
						<span className="material-icons">close</span>
					</div>
				</div>
				<form id="user-form" onSubmit={handleSubmit(onSubmit)}>
					<fieldset>
						<label className="labels" id="description">
							Beskriv deg selv
						</label>
						<textarea
							id="usersettings-description"
							htmlFor="description"
							form="user-form"
							defaultValue={prop.profile.description}
							maxLength="200"
							{...register("description", { required: true })}
						></textarea>
					</fieldset>
					<fieldset>
						<label className="labels" id="skills">
							Ferdigheter
						</label>
					</fieldset>
					<div id="tag-container">
						{/* {prop.skills.map((skill, key) => (
							<div className="tag-box" key={key}>
								{skill}
							</div>
						))} */}
					</div>
					<button className="save">Lagre</button>
				</form>
			</section>
		</div>
	)
}
