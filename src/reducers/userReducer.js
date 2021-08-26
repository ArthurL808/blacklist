import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_ERROR,
  IS_AUTHENTICATED,
} from "../actions/index";

const initialState = {
  id: null,
  name: "",
  company_name: "",
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_ERROR:
      alert(action.payload);
      return state;
    case LOGOUT:
      return initialState;
    case IS_AUTHENTICATED:
      return { ...state, ...action.payload  };
    default:
      return state;
  }
};

export default userReducer;
