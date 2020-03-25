import { LOAD_COSIGNERS } from "../actions/index";

const initialState = [];

const cosignersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COSIGNERS:
      let cosigners = state.concat(action.payload);
      return cosigners;
    default:
      return state;
  }
};

export default cosignersReducer;
