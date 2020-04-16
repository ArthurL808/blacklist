import { combineReducers } from "redux";
import cosignersReducer from "./cosignersReducer";
import defendantsReducer from "./defendantsReducer";
import deragatoryMarksReducers from "./deragatoryMarksReducer";

const reducer = combineReducers({
  defendants: defendantsReducer,
  cosigners: cosignersReducer,
  marks: deragatoryMarksReducers,
});

export default reducer;
