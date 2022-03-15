import "./DetailedItem.css"

const DetailedItem = (prop) => {
  return (
    <>
      <main id="main-container">
        <div id="view-container">
          <button id="close-button" onClick={prop.handleClose}>
            X
          </button>
          <div id="">
            <h1>{prop.title}</h1>
            <p id="project-summary">{prop.description}</p>
            <h3>Tags</h3>
            <div id="tag-container">
              <div className="tag-box">Film</div>
              <div className="tag-box">Spill</div>
              <div className="tag-box">TV</div>
              <div className="tag-box">Håndverk</div>
            </div>
            <h3>Git repo</h3>
            <h3>Forum</h3>
            <h3>Chat</h3>
            <input
              id="message-input"
              type="text"
              placeholder="Skriv en meldig"
            ></input>
          </div>
        </div>
      </main>
    </>
  )
}

export default DetailedItem
