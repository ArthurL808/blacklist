import { LOAD_DERAGATORYMARKS } from "../actions/index";


const deragatoryMarksReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_DERAGATORYMARKS:
          return state =  [...state.concat(action.payload) ]
            default:
              return state;
    }
}

export default deragatoryMarksReducer;