import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"
import Login from "./components/Login/Login"
import { useUser } from "./AuthContext/AuthContext"
import React from "react"
import { useApp } from "./AuthContext/ApplicationContext"

const App = () => {
	const { data, setData } = useApp()
	const { user } = useUser()

	return (
		<BrowserRouter>
			<NavBar data={data} setData={setData} />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Main data={data} setData={setData} />} />
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
