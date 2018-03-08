import React from 'react'
import PokeCell from './Pokecell'
import { PokeClasses } from './Pokeclasses';
import './styles/Pokelist.css'

const Pokelist = ({handleOnClick}) => {

	const cells = PokeClasses.map((pokeClass) => <PokeCell  key={pokeClass.id} pokeClass={pokeClass} />)

	return(
		<div className="poke-list">
			{cells}
		</div>
	)

}

export default Pokelist

