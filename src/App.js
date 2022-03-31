import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import NavBar from "./components/navbar/NavBar"
import Create from "./pages/Create"
import Login from "./components/login/Login"
import { useUser } from "./AuthContext/AuthContext"
import UpdateProject from "./pages/updateProject"
import { useApp } from "./AuthContext/ApplicationContext"

const App = () => {
	const { data, setData } = useApp()
	const { user } = useUser()

	return (
		<BrowserRouter>
			<NavBar searchData={data} setSearchData={setData} />
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Main data={data} setData={setData} />} />
					{user && <Route path="/profile" element={<Profile />} />}
					{user ? (
						<Route path="/create" element={<Create />} />
					) : (
						<Route path="/login" element={<Login />} />
					)}
					<Route path="/updateProject" element={<UpdateProject />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
