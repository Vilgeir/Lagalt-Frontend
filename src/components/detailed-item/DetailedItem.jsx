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
						<h1>{prop.title}</h1>
						<p id="project-summary">{prop.description}</p>
						<p>Tags</p>
						<div id="tag-container">
							{prop.tags.map((tag, key) => (
								<div className="tag-box" key={key}>
									{tag}
								</div>
							))}
						</div>
						<div>
							<p>Git repo</p>
							<a href={prop.gitlink}>{prop.gitlink}</a>
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
