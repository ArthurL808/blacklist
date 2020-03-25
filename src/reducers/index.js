import { combineReducers } from "redux";
import cosignersReducer from "./cosignersReducer";
import defendantsReducer from "./defendantsReducer";

const reducer = combineReducers({
  defendants: defendantsReducer,
  cosigners: cosignersReducer
});

export default reducer;
