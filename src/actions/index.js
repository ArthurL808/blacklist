import axios from "axios";

export const LOAD_DERAGATORYMARKS = "LOAD_DERAGATORYMARKS";

export const PERSON_SEARCH = "PERSON_SEARCH";
export const PERSON_SEARCH_FAIL = "PERSON_SEARCH_FAIL";

export const LOAD_PERSON = "LOAD_PERSON";
export const LOAD_PERSON_MARKS = "LOAD_PERSON_MARKS";

export const LOAD_ACTIVE_HUNTS = "LOAD_ACTIVE_HUNTS";

export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_PERSON = "ADD_PERSON";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGOUT = "LOGOUT";

export const loadDeragatoryMarksAsync = () => async (dispatch) => {
  await axios
    .get("/api/deragatorymarks")
    .then((response) => {
      dispatch({
        type: LOAD_DERAGATORYMARKS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
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

export const loadPersonAsync = (id) => async (dispatch) => {
  let requestPerson = axios.get(`/api/persons/${id}`);
  let requestDeragatoryMarksOnPerson = axios.get(
    `/api/deragatoryMarks/onPerson/${id}`
  );
  await axios
    .all([requestPerson, requestDeragatoryMarksOnPerson])
    .then(
      axios.spread((...response) => {
        let personResponse = response[0].data;
        let deragatoryMarksOnPersonResponse = response[1].data;
        dispatch({
          type: LOAD_PERSON,
          payload: {
            individualPerson: personResponse,
            marks: deragatoryMarksOnPersonResponse,
          },
        });
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const loadActiveHuntsAsync = () => async (dispatch) => {
  await axios
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

export const addPersonAsync = (data, fullAddress, deragatoryMark) => {
  axios
    .post("/api/persons", data)
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      fullAddress.person_id = res.id;
      deragatoryMark.on_person = res.id;
      addAddressAsync(fullAddress);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAddressAsync = (fullAddress) => {
  axios
    .post("/api/addresses", fullAddress)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addDeragatoryMarkAsync = (deragatoryMark) => {
  axios
    .post("/api/deragatoryMark", deragatoryMark)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginAction = (credentails) => async (dispatch) => {
  await axios
    .post("/api/auth/login", credentails)
    .then((res) => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: LOGIN_ERROR,
        payload: err.message
      })
    });
};

export const logoutAction = () => async (dispatch) => {
  await axios
    .post("/api/auth/logout")
    .then((res) => {
      return dispatch({
        type: LOGOUT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
