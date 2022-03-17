import { NavLink } from "react-router-dom"
import { useUser } from "../../AuthContext/AuthContext"
import firebase from "../../config/config-firebase"
import SearchBar from "../searchbar/SearchBar"

import "./navbar.css"

const NavBar = () => {
	const user = useUser()
	const logout = () => {
		firebase.auth().signOut()
	}

	return (
		<div>
			<nav className="navbar-container">
				<NavLink to="/">
					<h2>Lag Alt</h2>
				</NavLink>
				<SearchBar />
				<div className="right-container">
					<NavLink id="create-nav" to="/create">
						<p id="create-button">+</p>
					</NavLink>
					<NavLink to="/login">
						{user == null ? (
							<button id="login-button">Login</button>
						) : (
							<button onClick={logout}>Logout</button>
						)}
					</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
