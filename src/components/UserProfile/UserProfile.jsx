import "./UserProfile.css"

/*const ProfileSettings = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSettings = () => {
		setIsOpen(!isOpen)
	}
}*/

export const UserProfile = () => {
	return (
		<section id="profile-container" className="main-content">
			<div id="profile-header-container">
				<div id="profile-avatar-container">
					<img id="avatar" src="http://identicon.net/img/identicon.png"></img>
					<h1>Navn Navnesen</h1>
				</div>
				<div id="profile-settings-button" /*onclick={toggleSettings}*/>
					<span className="material-icons">settings</span>
				</div>
			</div>
			<h2>Beskrivelse:</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sit
				quam? Fugit necessitatibus eos provident adipisci, blanditiis mollitia
				cum quia quis possimus officiis ea maiores laborum debitis nobis
				laudantium accusamus, dolor nulla culpa suscipit dolores enim libero
				quasi! Non, ipsa.
			</p>

			<div id="profile-projects-container">
				<h2>Prosjekter</h2>
				<div>
					<span>Pågående:</span>
					<div id="profile-current-projects-container"></div>
				</div>
				<div>
					<span>Ferdige:</span>
					<div id="profile-closed-projects-container"></div>
				</div>
			</div>
		</section>
	)
}
