import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import personsReducer from "./personReducer";
import deragatoryMarksReducers from "./deragatoryMarksReducer";

const reducer = combineReducers({
  persons: personsReducer,
  marks: deragatoryMarksReducers,
  errors: errorReducer,
});

export default reducer;
