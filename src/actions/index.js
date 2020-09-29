import axios from "axios";

export const LOAD_DERAGATORYMARKS = "LOAD_DERAGATORYMARKS";

export const PERSON_SEARCH = "PERSON_SEARCH";
export const PERSON_SEARCH_FAIL = "PERSON_SEARCH_FAIL";

export const LOAD_PERSON = "LOAD_PERSON";
export const LOAD_PERSON_MARKS = "LOAD_PERSON_MARKS";

export const LOAD_ACTIVE_HUNTS = "LOAD_ACTIVE_HUNTS";

export const ADD_ADDRESS = "ADD_ADDRESS";

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

// export const addAddressAsync = (address) => async (dispatch) => {
//   await axios
//     .post("api/addresses", address)
//     .then((res) => {
//       dispatch({
//         type: ADD_ADDRESS,
//         payload: res
//       })
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
