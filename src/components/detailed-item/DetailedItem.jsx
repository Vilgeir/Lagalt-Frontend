import "./DetailedItem.css"
import ProjectSettingsButton from "../ProjectSettingsButton/ProjectSettingsButton"
import { useUser } from "../../AuthContext/AuthContext"
//import JoinButton from "../join-button/JoinButton"
//prop.users.map((x) => x.userId) != user.uid &&
const DetailedItem = (prop) => {
	const { user } = useUser()
	console.log(user)
	return (
		<>
			<main id="main-container">
				<div id="view-container">
					{user && <ProjectSettingsButton projectId={prop.projectId} />}
					<button id="close-button" onClick={prop.handleClose}>
						X
					</button>
					<div id="">
						<div id="headline">
							<h2 id="text-headline">{prop.projectTitle}</h2>
							{/* {user && prop.users[0].userId != user.uid && (
								<JoinButton {...prop} />
							)} */}
						</div>
						<h5 id="field-headline">{prop.field.fieldName}</h5>
						{user && (
							<h5 id="field-headline">Laget av: {prop.users[0].userName}</h5>
						)}
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
						{user && (
							<>
								<div>
									<h4 className="undertitle">Git repo</h4>
									<a href={prop.gitRepo}>{prop.gitRepo}</a>
								</div>

								<h4 className="undertitle">Forum</h4>

								<input
									id="message-input"
									type="text"
									placeholder="Skriv en meldig"
								></input>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	)
}

export default DetailedItem
