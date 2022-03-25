import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"
import Login from "./components/Login/Login"
import { useUser } from "./AuthContext/AuthContext"
import React, { useState } from "react"
import { useApp } from "./AuthContext/ApplicationContext"

const App = () => {
	const { user } = useUser()
	const { data, sortedProperty, filterCategory, offset, limit } = useApp()

	return (
		<BrowserRouter>
			<NavBar searchData={data} />
			<div className="app-container">
				<Routes>
					<Route
						path="/"
						element={
							<Main
								data={data}
								sortedProperty={sortedProperty}
								filterCategory={filterCategory}
								offset={offset}
								limit={limit}
							/>
						}
					/>
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
