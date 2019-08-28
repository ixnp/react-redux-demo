import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

import {initalizeBowies} from './actions'
import {connect} from 'react-redux'

 class App extends Component {
  
  componentDidMount(){
  this.props.initalizeBowies('bowies')

  } 
 

  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    initalizeBowies: (bowies) => dispatch(initalizeBowies(bowies))
  }
}
export default connect(null,mapDispatchToProps)(App)