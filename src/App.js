import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"
import { Login } from "./components/Login/Login"

const App = () => {
	return (
		<BrowserRouter>
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			></link>
			<NavBar />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/create" element={<Create />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
