import {LOGIN_SUCCESS, LOGOUT } from "../actions/index";

const initialState = {
  currentUser: {},
  loggedIn: false,
  loginError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      
      return {
        ...state,
        loggedIn: true,
        currentUser: {...action.payload},
      };
    case LOGOUT:
      return { ...state, users: [], loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
