
import './FilteredForm.css'



export const FilterProject = () => {
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

        <div className="searchItem">
          <form >
            <input type="text" placeholder="search a project" className="searchForm"></input>
            <button type="submit" className="searchButton"> Search </button>
          </form>
        </div>
     
    </main>
  );
};
