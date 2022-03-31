import { useTheme } from "../../AuthContext/ThemeContext"

const PrivacyMode = () => {
	const { privacy, setPrivacy } = useTheme()
	const handleLockPrivacy = () => {
		setPrivacy(!privacy)
	}

	return (
		<div>
			{privacy ? (
				<button onClick={handleLockPrivacy}>
					<span className="material-icons-outlined">lock</span>
				</button>
			) : (
				<button onClick={handleLockPrivacy}>
					<span className="material-icons-outlined">lock_open</span>
				</button>
			)}
		</div>
	)
}

export default PrivacyMode
