import React, { Component } from 'react';
import Pokelist from './Pokelist'
import DetailView from './DetailView'
import './styles/App.css';


class App extends Component {

  constructor(){
    super()

    this.state = {

    }
  }

  handleOnClick(id) {
    console.log(id);
  }


  render() {
    return (
      <div className="App">
        <Pokelist handleOnClick={this.handleOnClick}/>
        <DetailView />
      </div>
    );
  }
}


export default App;
