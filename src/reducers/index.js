import { combineReducers } from "redux";
import personsReducer from "./personsReducer";
import deragatoryMarksReducer from "./deragatoryMarksReducer";
import huntsReducer from './huntsreducer'

const reducer = combineReducers({
  persons: personsReducer,
  deragatoryMarks: deragatoryMarksReducer,
  hunts: huntsReducer
});

export default reducer;
