import { combineReducers } from "redux";
import personsReducer from "./personsReducer";
import deragatoryMarksReducer from "./deragatoryMarksReducer";
import huntsReducer from "./huntsreducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  persons: personsReducer,
  deragatoryMarks: deragatoryMarksReducer,
  hunts: huntsReducer,
  user: userReducer,
});

export default reducer;
