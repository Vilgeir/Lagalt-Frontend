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
					<h2>Lag Alt</h2>
				</NavLink>
				<SearchBar />
				<div className="right-container">
					<NavLink id="create-nav" to="/create">
						<p id="create-button">+</p>
					</NavLink>

					{!user && (
						<NavLink to="/login">
							<button id="login-button">Login</button>
						</NavLink>
					)}

					{user && (
						<NavLink to={"/"} onClick={() => firebase.auth().signOut()}>
							Logout
						</NavLink>
					)}
				</div>
			</nav>
		</div>
	)
}

export default NavBar
