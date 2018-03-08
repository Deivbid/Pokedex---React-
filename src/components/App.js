import React, { Component } from 'react';
import Pokemon from './Pokemon'
import Pokelist from './Pokelist'
import DetailView from './DetailView'
import axios from 'axios'
import './styles/App.css';


class App extends Component {

  constructor(){
    super()

    this.state = {

    }
  }

  handleOnClick(id) {
    //fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    axios.get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        console.log(pokemon);
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Pokelist handleOnClick={this.handleOnClick.bind(this)}/>
        <DetailView />
      </div>
    );
  }
}


export default App;
