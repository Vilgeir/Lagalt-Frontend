import "./UserSettings.css"

export const UserSettings = () => {
	return (
		<section id="usersettings-container" className="main-content">
			<h1>Bruker informasjon</h1>
			<form id="user-form">
				<fieldset>
					<label className="labels" id="username">
						Navn
					</label>
					<input htmlFor="username" value="Navn"></input>
				</fieldset>
				<fieldset>
					<label className="labels" id="description">
						Beskriv deg selv
					</label>
					<textarea htmlFor="description" form="user-form"></textarea>
				</fieldset>
				<fieldset>
					<label className="labels" id="skills">
						Ferdigheter
					</label>
					<input htmlFor="skills"></input>
				</fieldset>
				<div id="skills-container"></div>
				<button className="save">Lagre</button>
			</form>
		</section>
	)
}
