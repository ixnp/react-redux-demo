import {increaseVote, decreaseVote, initalizeBowies} from '../actions'

import babyBowie from '../assets/babyBowie.jpeg';
import hipsterBowie from '../assets/hipsterBowie.jpg';
import ziggieBowie from '../assets/ziggyBowie.jpg';
import goblinBowie from '../assets/goblinBowie.jpg';

 const initialState = {
        bowies: {}
 }
 
 
 const bowieReducer = (state=initialState,action) => {
    console.log('action')
    switch(action.type){
        case 'CREATE_BOWIES' : {
            console.log('create bowies: ', action.payload)
            return {...state, bowies: action.payload}
        }
        
         case 'INCREASE_VOTE': {
             return {
                 ...state,
                bowies: {
                    ...state.bowies,
                    [action.payload.id]: {
                        ...state.bowies[action.payload.id],
                        votes: state.bowies[action.payload.id].votes+1
                    }
                }
             }
         }
         case 'DECREASE_VOTE': {
            return {
                ...state,
               bowies: {
                   ...state.bowies,
                   [action.payload.id]: {
                       ...state.bowies[action.payload.id],
                       votes: state.bowies[action.payload.id].votes+1
                   }
               }
            }
        }
        default: 
        return state
    }
}

export default bowieReducer