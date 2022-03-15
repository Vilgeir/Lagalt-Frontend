import "./UserProfile.css"

export const UserProfile = () => {
  return (
    <div className="wrapper">
      <div className="card-container">
        <span className="pro">PRO</span>
        <img
          className="round"
          src="https://randomuser.me/api/portraits/men/78.jpg"
          alt="user"
        />
        <h3>User Name</h3>
        <h6>Oslo</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>

        <div className="portofolio">
          <h3>Portfolio</h3>
          <ul>
            <li>Project Name</li>
            <li>Description</li>
            <li>Category</li>
          </ul>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>

      <footer></footer>
    </div>
  )
}
