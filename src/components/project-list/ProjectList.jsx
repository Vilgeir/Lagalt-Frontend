import { useState } from "react"
import DetailedItem from "../detailed-item/DetailedItem"
import ProjectItem from "../project-item/ProjectItem"

const data = {
	title: "Tv - Script",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tempor turpis, sagittis accumsan ante euismod a. Etiam venenatis risus eu arcu pretium, a mattis dolor euismod. Vestibulum vel purus velit. Suspendisse finibus ac ante in sagittis.description",
}

const ProjectList = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDetails = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			{isOpen && <DetailedItem handleClose={toggleDetails} {...data} />}
			<ProjectItem handleOpen={toggleDetails} {...data} />
		</>
	)
}

export default ProjectList
