import ProjectItem from "../project-item/ProjectItem"

const url = "https://lagalt.azurewebsites.net/api/Projects/1"
const apiData = fetch(url).then((data) => data.json())
console.log(apiData)

const data = [
	{
		id: 1,
		title: "Tv - Script",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tempor turpis, sagittis accumsan ante euismod a. Etiam venenatis risus eu arcu pretium, a mattis dolor euismod. Vestibulum vel purus velit. Suspendisse finibus ac ante in sagittis.description",
		tags: ["underholdning", "læring", "nytt"],
		gitlink: "https://github.com/MehboobSingh/backend-case",
	},
	{
		id: 2,
		title: "Web App",
		description:
			"JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999.",
		tags: ["utvikling", "læring", "gammelt", "google"],
		gitlink: "https://github.com/Vilgeir/Lagalt-Frontend",
	},
]
const ProjectList = () => {
	return (
		<>
			{data.map((obj, key) => (
				<ProjectItem key={key} {...obj} />
			))}
		</>
	)
}

export default ProjectList
