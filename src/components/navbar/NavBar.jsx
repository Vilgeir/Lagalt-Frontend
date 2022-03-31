import { Link, NavLink } from "react-router-dom"
import { useUser } from "../../AuthContext/AuthContext"
import firebase from "../../config/config-firebase"
//import PrivacyMode from "../lock/lock"
import SearchBar from "../searchbar/SearchBar"

import "./navbar.css"

const NavBar = (props) => {
	const { user } = useUser()
	console.log(props)

	const { searchData, setSearchData } = props

	return (
		<div>
			<nav className="navbar-container">
				<Link id="title-nav" end to="/">
					<h2 id="title">LAGALT</h2>
				</Link>
				<SearchBar data={searchData} setData={setSearchData} />
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
							{/* <PrivacyMode /> */}
						</>
					)}
				</div>
			</nav>
		</div>
	)
}

export default NavBar
