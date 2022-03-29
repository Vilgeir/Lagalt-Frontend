import "./DetailedItem.css"
import ProjectSettingsButton from "../ProjectSettingsButton/ProjectSettingsButton"

const DetailedItem = (prop) => {
	return (
		<>
			<main id="main-container">
				<div id="view-container">
					<ProjectSettingsButton projectId={prop.projectId} />
					<button id="close-button" onClick={prop.handleClose}>
						X
					</button>
					<div id="">
						<div id="headline">
							<h2 id="text-headline">{prop.projectTitle}</h2>
							<button id="join-button">Bli med</button>
						</div>
						<h4 className="undertitle">Beskrivelse</h4>
						<span id="project-summary">{prop.description}</span>
						{/* <p>Brukere: {prop.users.map((x) => x.userName + " ")}</p> */}
						<h4 className="undertitle">Tags</h4>
						<div id="tag-container">
							{prop.skills.map((skill, key) => (
								<div className="tag-box" key={key}>
									{skill.skillName}
								</div>
							))}
						</div>
						<div>
							<h4 className="undertitle">Git repo</h4>
							{/* <a href={prop.gitlink}>{prop.gitlink}</a> */}
						</div>

						<h4 className="undertitle">Forum</h4>

						<input
							id="message-input"
							type="text"
							placeholder="Skriv en meldig"
						></input>
					</div>
				</div>
			</main>
		</>
	)
}

export default DetailedItem
