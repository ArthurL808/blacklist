import { LOAD_DERAGATORYMARKS } from "../actions/index";

let initalState = [
  
];

const deragatoryMarksReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_DERAGATORYMARKS:
              state =  [...state.concat(action.payload) ]
            default:
              return state;
    }
}

export default deragatoryMarksReducer;