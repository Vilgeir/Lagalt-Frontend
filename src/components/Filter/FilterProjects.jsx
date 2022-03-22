import "./FilteredForm.css"

const FilterProject = (props) => {
	return (
		<main className="filteredForm">
			<div className="filteredItem">
				<select
					className="selectionFilter"
					value={props.filterProperty}
					onChange={props.onFilter}
				>
					<option className="">Kategori</option>
					<option value="1">Music</option>
					<option value="2">Film </option>
					<option value="3">Game Development</option>
					<option value="4">Web Development</option>
				</select>
				<select
					className="selectionFilter"
					value={props.sortProperty}
					onChange={props.onSort}
				>
					<option value="Sorter">Sorter</option>
					<option value="ASC">ASC</option>
					<option value="DESC">DESC</option>
				</select>
			</div>
		</main>
	)
}

export default FilterProject
