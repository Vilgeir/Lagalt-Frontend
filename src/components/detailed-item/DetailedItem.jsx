import "./DetailedItem.css"

const DetailedItem = (prop) => {
	return (
		<>
			<main id="main-container">
				<div id="view-container">
					<button id="close-button" onClick={prop.handleClose}>
						X
					</button>
					<div id="">
						<h1>{prop.projectTitle}</h1>
						<span>Beskrivelse:</span>
						<p id="project-summary">{prop.description}</p>
						<p>Brukere: {prop.users.map((x) => x.userName + " ")}</p>
						<p>Tags</p>
						<div id="tag-container">
							{prop.skills.map((skill, key) => (
								<div className="tag-box" key={key}>
									{skill.skillName}
								</div>
							))}
						</div>
						<div>
							<p>Git repo</p>
							{/* <a href={prop.gitlink}>{prop.gitlink}</a> */}
						</div>

						<p>Forum</p>
						<p>Chat</p>
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
