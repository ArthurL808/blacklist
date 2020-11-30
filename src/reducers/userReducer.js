import { LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from "../actions/index";

const initialState = {
  currentUser: {},
  loggedIn: !!localStorage.getItem("token"),
  loginError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        loggedIn: true,
        currentUser: { ...action.payload },
      };
    case LOGIN_ERROR:
      alert(action.payload);
      return state;
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, currentUser: {}, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
