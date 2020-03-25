import { LOAD_DEFENDANTS } from "../actions/index";

const initialState = [];

const defendantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEFENDANTS:
      const defendants = state.concat(action.payload);
      return defendants;
    default:
      return state;
  }
};

export default defendantsReducer;
