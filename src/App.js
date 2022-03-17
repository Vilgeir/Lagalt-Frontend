import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"
import { Login } from "./components/Login/Login"
import AuthProvider from "./AuthContext/AuthContext"

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
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
		</AuthProvider>
	)
}

export default App
