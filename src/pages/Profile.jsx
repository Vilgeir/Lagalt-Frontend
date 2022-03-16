import React from "react"
import { UserSettings } from "../components/user-settings/UserSettings"
import { UserProfile } from "../components/UserProfile/UserProfile"

const ProfilePage = () => {
	return (
		<>
			<UserProfile />
			<UserSettings />
		</>
	)
}

export default ProfilePage
