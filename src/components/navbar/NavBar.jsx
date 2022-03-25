import { NavLink } from "react-router-dom"
import { useUser } from "../../AuthContext/AuthContext"
import firebase from "../../config/config-firebase"
import SearchBar from "../searchbar/SearchBar"

import "./navbar.css"

const NavBar = (props) => {
	const { user } = useUser()

	const { searchData } = props

	return (
		<div>
			<nav className="navbar-container">
				<NavLink id="title-nav" to="/">
					<h2 id="title">LAGALT</h2>
				</NavLink>
				<SearchBar searchData={searchData} />
				<div className="right-container">
					{!user && (
						<NavLink to="/login">
							<button className="button" id="login-button">
								Login
							</button>
						</NavLink>
					)}

					{user && (
						<>
							<NavLink id="create-nav" to="/create">
								<p id="create-button">+</p>
							</NavLink>
							<NavLink to={"/profile"}>
								<button className="button" id="profile-button">
									Profil
								</button>
							</NavLink>
							<NavLink to={"/"} onClick={() => firebase.auth().signOut()}>
								<button className="button" id="logout-button">
									Logg ut
								</button>
							</NavLink>
						</>
					)}
				</div>
			</nav>
		</div>
	)
}

export default NavBar
