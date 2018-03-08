import React from 'react'
import './styles/Pokecell.css'
import sprites from '../assets/images/sprites.png';

const Pokecell = ({pokeClass}) => {

	const {id, backgroundPosition} = pokeClass
	const styles = {backgroundImage:`url(${sprites})` , backgroundPosition}
	
	return(
		<button style={styles} className="poke-cell">
			
		</button>
	)

}

export default Pokecell