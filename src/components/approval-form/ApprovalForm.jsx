import "./ApprovalForm.css"

export const ApprovalForm = () => {
	return (
		<div className="classWrapper">
			<form>
				<textarea
					type="text"
					placeholder="Hva motiverer deg for å søke dette prosjektet?"
					className="form"
				></textarea>
				<button className="button"> send søknaden</button>
			</form>
		</div>
	)
}
