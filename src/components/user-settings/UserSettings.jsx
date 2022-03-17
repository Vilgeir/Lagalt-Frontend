import "./UserSettings.css"

export const UserSettings = ({ setShowModal }) => {
	const handleClick = () => {
		setShowModal(false)
	}

	return (
		<div id="main-container">
			<section id="usersettings-container" className="main-content">
				<div id="usersettings-header">
					<h1>Bruker informasjon</h1>
					<div id="profile-settings-button" onClick={handleClick}>
						<span className="material-icons">close</span>
					</div>
				</div>
				<form id="user-form">
					<fieldset>
						<label className="labels" id="username">
							Navn
						</label>
						<input htmlFor="username" defaultValue={name}></input>
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
					<div className="skills-container"></div>
					<button className="save">Lagre</button>
				</form>
			</section>
		</div>
	)
}
