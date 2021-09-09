import { LOAD_ACTIVE_HUNTS, LOAD_BLACKLIST } from "../actions/index";

const huntsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ACTIVE_HUNTS:
      return (state = [...state.concat(action.payload)]);
    case LOAD_BLACKLIST:
      return [...action.payload.hunts];
    default:
      return state;
  }
};

export default huntsReducer;
