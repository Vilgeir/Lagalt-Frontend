import "./FilteredForm.css"

const FilterProject = () => {
	return (
		<main className="filteredForm">
			<div className="filteredItem">
				<select className="selectionFilter">
					<option className="opt">Kategori</option>
					<option>Music</option>
					<option>Film </option>
					<option>Game Development</option>
					<option>Web Development</option>
				</select>
				<select className="selectionFilter">
					<option>Sorter</option>
					<option>ASC</option>
					<option>DESC</option>
				</select>
			</div>
		</main>
	)
}

export default FilterProject
