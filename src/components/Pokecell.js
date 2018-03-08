import React from 'react'
import './styles/Pokecell.css'
import sprites from '../public/images/sprites.png';

const Pokecell = ({pokeClass}) => {

	const {id, backgroundPosition} = pokeClass
	return(
		<button className="poke-cell">
			{pokeClass.backgro}
		</button>
	)

}

export default Pokecell