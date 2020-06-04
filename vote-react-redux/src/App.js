import React, { Component } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import './App.css';
import babyBowie from './assets/babyBowie.jpeg';
import hipsterBowie from './assets/hipsterBowie.jpg';
import ziggieBowie from './assets/ziggyBowie.jpg';
import goblinBowie from './assets/goblinBowie.jpg';

class App extends Component {
  state = {
    bowies:{

        1: {
            id: 1,
            name: 'Baby Bowie',
            votes: 0,
            image: babyBowie
        },
        2: {
            id: 2,
            name: 'Hipster Bowie',
            votes: 0,
            image: hipsterBowie
        },
        3: {
            id: 3,
            name: 'Ziggie Stardust',
            votes: 0,
            image: ziggieBowie
        },
        4: {
            id: 4,
            name: 'Goblin King',
            votes: -1000,
            image: goblinBowie
        },
  }
}
increaseVote = (bowieid) => {
  let bowie = this.state.bowies[bowieid] 
  bowie.votes++
  console.log(bowie)
  this.setState({bowie})
}

decreaseVote = (bowieid) => {
  let bowie = this.state.bowies[bowieid] 
  bowie.votes--
  console.log(bowie)
  this.setState({bowie})
}
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <MainContainer  bowielist={this.state.bowies} increaseVote={this.increaseVote} decreaseVote={this.decreaseVote}  />
      </div>
    );
  }
}

export default App;