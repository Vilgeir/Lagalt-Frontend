import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"
import { Login } from "./components/Login/Login"
import { useUser } from "./AuthContext/AuthContext"

const App = () => {
	const { user } = useUser()

	return (
		<BrowserRouter>
			<NavBar />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Main />} />
					{user && <Route path="/profile" element={<Profile />} />}
					{user ? (
						<Route path="/create" element={<Create />} />
					) : (
						<Route path="/login" element={<Login />} />
					)}
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
