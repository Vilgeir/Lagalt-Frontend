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
					<option value="all">Kategori</option>
					<option value="1">Musikk</option>
					<option value="2">Film </option>
					<option value="3">Spillutvikling</option>
					<option value="4">Webutvikling</option>
				</select>
				<select
					className="selectionFilter"
					value={props.sortProperty}
					onChange={props.onSort}
				>
					<option value="Sorter">Sorter</option>
					<option value="ASC">A-Z</option>
					<option value="DESC">Z-A</option>
				</select>
			</div>
		</main>
	)
}

export default FilterProject
