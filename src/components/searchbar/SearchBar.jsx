import "./SearchBar.css"

const SearchBar = () => {
	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Søk blant prosjekter"
				className="searchForm"
			></input>
			<button type="submit" className="search-button">
				Search
			</button>
		</div>
	)
}

export default SearchBar
