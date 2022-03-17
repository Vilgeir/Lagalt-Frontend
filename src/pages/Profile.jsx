import React from "react"
import { UserProfile } from "../components/UserProfile/UserProfile"

const data = {
	id: 1,
	name: "John Smith",
	description:
		"John Smith was an English explorer, soldier and writer best known for his role in establishing the first permanent English colony in the New World at Jamestown, Virginia. Smith's legend has grown over the centuries, in particular due to the popular story of his involvement with Pocahontas, a native American princess.",
	skills: ["exploring", "fighting", "writing"],
}

const ProfilePage = () => {
	return (
		<>
			<UserProfile {...data} />
		</>
	)
}

export default ProfilePage
