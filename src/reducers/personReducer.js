import { PERSON_SEARCH } from "../actions/index";

const initialState = [];

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_SEARCH:
      state = [];
     return  state = [...state.concat(action.payload)];
    default:
      return state;
  }
};

export default personsReducer;
