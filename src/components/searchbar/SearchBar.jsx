import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="searchItem">
      <input
        type="text"
        placeholder="Søk blant prosjekter"
        className="searchForm"
      ></input>
      <button type="submit" className="searchButton">
        Search
      </button>
    </div>
  )
}

export default SearchBar
