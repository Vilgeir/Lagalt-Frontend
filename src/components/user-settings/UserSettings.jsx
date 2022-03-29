import "./UserSettings.css"

export const UserSettings = (prop) => {
	return (
		<div id="main-container">
			<section id="usersettings-container" className="main-content">
				<div id="usersettings-header">
					<h1>Legg til informasjon</h1>
					<div id="profile-settings-button" onClick={prop.handleClose}>
						<span className="material-icons">close</span>
					</div>
				</div>
				<form id="user-form">
					<fieldset>
						<label className="labels" id="description">
							Beskriv deg selv
						</label>
						<textarea
							id="usersettings-description"
							htmlFor="description"
							form="user-form"
							defaultValue={prop.description}
							maxLength="200"
						></textarea>
					</fieldset>
					<fieldset>
						<label className="labels" id="skills">
							Ferdigheter
						</label>
					</fieldset>
					<div id="tag-container">
						{prop.skills.map((skill, key) => (
							<div className="tag-box" key={key}>
								{skill}
							</div>
						))}
					</div>
					<button className="save">Lagre</button>
				</form>
			</section>
		</div>
	)
}
