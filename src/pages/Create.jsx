import "./Create.css"

const Create = () => {
	return (
		<main id="create-container">
			<p id="create-intro">Lag nytt prosjekt</p>
			<div id="item-create">
				<div className="create-select">
					<span className="create-headline">Velg en kategori</span>
					<select className="create-input-select">
						<option>Velg</option>
						<option>Film</option>
						<option>Tv</option>
						<option>Web</option>
					</select>
				</div>
				<span className="create-headline">Hva er tittelen på prosjektet?</span>
				<input className="create-input" placeholder="Tittel"></input>
				<span className="create-headline">Beskirv prosjektet</span>
				<input className="create-input" placeholder="Beskrivelse"></input>
				<span className="create-headline">Git repo</span>
				<input className="create-input" placeholder="Git repo"></input>
				<div>
					<input type="checkbox"></input>
					<label>Skole</label>
					<input type="checkbox"></input>
					<label>Underholdning</label>
					<input type="checkbox"></input>
					<label>Skill</label>
					<input type="checkbox"></input>
					<label>Skill</label>
					<input type="checkbox"></input>
					<label>Skill</label>
					<input type="checkbox"></input>
					<label>Skill</label>
				</div>
				<h3>Bilde?</h3>
				<div id="create-save-box">
					<button id="create-save">Lagre</button>
				</div>
			</div>
		</main>
	)
}

export default Create
