import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/create" element={<Create />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
