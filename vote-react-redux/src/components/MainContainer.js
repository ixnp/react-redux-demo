import React from 'react';
import Bowies from './Bowies';
import {connect} from 'react-redux'

class MainContainer extends React.Component {


 
    
    render(){
        return(
            <div>
                <Bowies 
                    increaseVote={this.increaseVote}
                    decreaseVote={this.decreaseVote}
                />
                <h1>THANKS FOR VOTING</h1>
            </div>
        )
    }
}

export default MainContainer;