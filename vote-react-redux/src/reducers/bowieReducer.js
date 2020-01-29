import babyBowie from '../assets/babyBowie.jpeg';
import hipsterBowie from '../assets/hipsterBowie.jpg';
import ziggieBowie from '../assets/ziggyBowie.jpg';
import goblinBowie from '../assets/goblinBowie.jpg';

const initialState = {
    bowies: {
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
const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'INCREASE VOTE':
            return {
                ...state, bowies: {
                   ...state.bowies,
                   [action.payload]: {
                       ...state.bowies[action.payload],
                       votes: state.bowies[action.payload]["votes"] +1
                   }
                }
            }
        default:
            return state;
    }
}

export default reducer