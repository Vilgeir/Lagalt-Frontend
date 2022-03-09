import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./navbar/NavBar"

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
