import React from "react"
import { NavLink } from "react-router-dom"
import SearchBar from "../searchbar/SearchBar"
import "./navbar.css"

const NavBar = () => {
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
					<NavLink to="/profile">
						<button id="login-button">Login</button>
					</NavLink>
				</div>
			</nav>

			<div></div>
		</div>
	)
}

export default NavBar
