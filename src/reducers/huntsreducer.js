import { LOAD_ACTIVE_HUNTS } from "../actions/index";

const huntsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ACTIVE_HUNTS:
        return state =  [...state.concat(action.payload) ]
    default:
      return state;
  }
};

export default huntsReducer;
