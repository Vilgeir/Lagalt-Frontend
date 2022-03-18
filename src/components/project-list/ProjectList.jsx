import ProjectItem from "../project-item/ProjectItem"
//const url = "https://lagalt.azurewebsites.net/api/Projects/1"
//const apiData = fetch(url).then((data) => data.json())

const ProjectList = ({ data }) => {
	/* const compare = (a, b) => {
		if (a.title < b.title) {
			return -1
		}
		if (a.title > b.title) {
			return 1
		}
		return 0
	} */

	return (
		<>
			{data.map((obj, key) => (
				<ProjectItem key={key} {...obj} />
			))}
		</>
	)
}

export default ProjectList
