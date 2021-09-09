import { LOAD_DERAGATORYMARKS, LOAD_BLACKLIST } from "../actions/index";

const deragatoryMarksReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DERAGATORYMARKS:
      return (state = [...state.concat(action.payload)]);
    case LOAD_BLACKLIST:
      return [...action.payload.marks];
    default:
      return state;
  }
};

export default deragatoryMarksReducer;
