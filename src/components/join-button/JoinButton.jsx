import React from "react"
import { updateProjectTwo } from "../../api/update-project"
import { useUser } from "../../AuthContext/AuthContext"

const JoinButton = (prop) => {
	const { user } = useUser()
	console.log(prop.users[0].userId)
	const handleClick = async () => {
		const [error, updated] = await updateProjectTwo(prop, user)

		if (error != null) {
			console.log(error)
		} else {
			console.log(updated)
		}
	}

	return (
		<>
			<button onClick={handleClick} id="join-button">
				Bli med
			</button>
		</>
	)
}

export default JoinButton
