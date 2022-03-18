import ProjectItem from "../project-item/ProjectItem"

const ProjectList = ({ data }) => {
	const compare = (a, b) => {
		if (a.title < b.title) {
			return -1
		}
		if (a.title > b.title) {
			return 1
		}
		return 0
	}

	return (
		<>
			{data.map((obj, key) => (
				<ProjectItem key={key} {...obj} />
			))}
		</>
	)
}

export default ProjectList
