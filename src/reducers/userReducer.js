import { LOGIN, LOGOUT } from "../actions/index";

const initialState = {
  id: 0,
  username: "",
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("payload", action.payload);
      return {
        ...state,
        state: action.payload,
      };
    case LOGOUT:
      return { id: 0, username: "", name: "" };
    default:
      return state;
  }
};

export default userReducer;
