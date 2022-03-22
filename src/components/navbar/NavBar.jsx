import { NavLink } from "react-router-dom"
import { useUser } from "../../AuthContext/AuthContext"
import firebase from "../../config/config-firebase"
import SearchBar from "../searchbar/SearchBar"

import "./navbar.css"

const NavBar = () => {
	const { user } = useUser()

	return (
		<div>
			<nav className="navbar-container">
				<NavLink to="/">
					<h2>LAGALT</h2>
				</NavLink>
				<SearchBar />
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
