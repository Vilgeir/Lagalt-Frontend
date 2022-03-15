import "./UserSettings.css"

export const UserProfile = () => {
	return (
		<section>
			<form id="user-form">
				<fieldset>
					<label id="username">Navn</label>
					<input htmlFor="username" value="Navn"></input>
				</fieldset>
				<fieldset>
					<label id="description">Beskriv deg selv</label>
					<textarea htmlFor="description" form="user-form"></textarea>
				</fieldset>
				<fieldset>
					<label id="skills">Ferdigheter</label>
					<input htmlFor="skills"></input>
				</fieldset>
				<div id="skills-container"></div>
				<button>Lagre</button>
			</form>
		</section>
	)
}
