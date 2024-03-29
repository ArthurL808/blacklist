import axios from "axios";
import auth from "../authService";

export const LOAD_DERAGATORYMARKS = "LOAD_DERAGATORYMARKS";
export const LOAD_BLACKLIST = "LOAD_BLACKLIST";
export const LOAD_PERSON_PAGE = "LOAD_PERSON_PAGE";
export const LOAD_PERSON_MARKS = "LOAD_PERSON_MARKS";
export const LOAD_ACTIVE_HUNTS = "LOAD_ACTIVE_HUNTS";
export const LOAD_USER_HUNTS = "LOAD_USER_HUNTS";

export const PERSON_SEARCH = "PERSON_SEARCH";
export const PERSON_SEARCH_FAIL = "PERSON_SEARCH_FAIL";

export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_PERSON = "ADD_PERSON";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const IS_AUTHENTICATED = "IS_AUTHENTICATED";

// export const LOAD_USER = "LOAD_USER";

export const loadDeragatoryMarksAsync = () => (dispatch) => {
  axios
    .get("/api/deragatorymarks")
    .then((response) => {
      dispatch({
        type: LOAD_DERAGATORYMARKS,
        payload: response.data,
      });
    })
    .catch((err) => {
      if (err.status === 401) {
        auth.logout();
      }
      console.log(err);
    });
};

export const loadMyBlacklist = () => (dispatch) => {
  let marksRequest = axios.get("/api/users/myBlacklist");
  let huntsRequest = axios.get("/api/hunts/myBlacklist");

  axios
    .all([marksRequest, huntsRequest])
    .then(
      axios.spread((...response) => {
        let marksResponse = response[0].data;
        let huntsResponse = response[1].data;
        dispatch({
          type: LOAD_BLACKLIST,
          payload: {
            marks: marksResponse,
            hunts: huntsResponse,
          },
        });
      })
    )
    .catch((err) => {
      console.error(err);
    });
};

export const searchPersonsAsync = (searchTerm) => async (dispatch) => {
  await axios
    .get("/api/persons/search/" + searchTerm)
    .then((response) => {
      if (response.data.length <= 0) {
        return dispatch({
          type: PERSON_SEARCH_FAIL,
          payload: `No Results for ${searchTerm}`,
        });
      }
      dispatch({
        type: PERSON_SEARCH,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: PERSON_SEARCH_FAIL,
        payload: err.message,
      });
    });
};

export const loadPersonPage = (id) => (dispatch) => {
  let personRequest = axios.get(`/api/persons/${id}`);
  let personMarkRequest = axios.get(`/api/deragatoryMarks/onPerson/${id}`);
  axios
    .all([personRequest, personMarkRequest])
    .then(
      axios.spread((...response) => {
        let personResponse = response[0].data;
        let personMarkResponse = response[1].data;
        dispatch({
          type: LOAD_PERSON_PAGE,
          payload: {
            individualPerson: personResponse,
            marks: personMarkResponse,
          },
        });
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const loadActiveHuntsAsync = () => (dispatch) => {
  axios
    .get("/api/hunts/active")
    .then((response) => {
      dispatch({
        type: LOAD_ACTIVE_HUNTS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addPersonAsync = (data) => {
  axios
    .post("/api/persons", data)
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      return res.id;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAddressAsync = (address) => {
  axios
    .post("/api/addresses", address)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeragatoryMarkInputAsync = (deragatoryMark) => {
  axios
    .post("/api/deragatoryMark", deragatoryMark)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginAction = (credentails) => (dispatch) => {
  return axios
    .post("/api/auth/login", credentails)
    .then((res) => {
      console.log(res.data);
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: LOGIN_ERROR,
        payload: err.message,
      });
    });
};

// export const logoutAction = () => async (dispatch) => {
//   await axios
//     .post("/api/auth/logout")
//     .then((res) => {
//       return dispatch({
//         type: LOGOUT,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const isAuthenticatedAction = () => (dispatch) => {
  return axios
    .get("/api/auth/loggedIn")
    .then((res) => {
      return dispatch({
        type: IS_AUTHENTICATED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
