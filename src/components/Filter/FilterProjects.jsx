import "./FilteredForm.css"
import SearchBar from "../searchbar/SearchBar"

const FilterProject = () => {
	return (
		<main className="filteredForm">
			<div className="filteredItem">
				<select className="selectionFilter ">
					<option>Music</option>
					<option>Film </option>
					<option>Game Development</option>
					<option>Web Development</option>
				</select>
			</div>
			<SearchBar />
		</main>
	)
}

export default FilterProject
