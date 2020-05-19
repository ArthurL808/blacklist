export const LOAD_DEFENDANTS = "LOAD_DEFENDANTS";
export const LOAD_COSIGNERS = "LOAD_COSIGNERS";
export const LOAD_DERAGATORYMARKS = "LOAD_DERAGATORYMARKS";

export const PERSON_SEARCH = "PERSON_SEARCH";
export const PERSON_SEARCH_FAIL = "PERSON_SEARCH_FAIL";
export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

// export const loadDefendantsAsync = () => async (dispatch) => {
//   fetch("/api/defendants")
//     .then((response) => {
//       return response.json();
//     })
//     .then((defendants) => {
//       dispatch({
//         type: LOAD_DEFENDANTS,
//         payload: defendants,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const loadCosignersAsync = () => async (dispatch) => {
//   fetch("/api/cosigners")
//     .then((response) => {
//       return response.json();
//     })
//     .then((cosigners) => {
//       dispatch({
//         type: LOAD_COSIGNERS,
//         payload: cosigners,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const loadDeragatoryMarksAsync = () => async (dispatch) => {
  fetch("/api/deragatorymarks")
    .then((response) => {
      return response.json();
    })
    .then((marks) => {
      dispatch({
        type: LOAD_DERAGATORYMARKS,
        payload: marks,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchPersonsAsync = (searchTerm) => async (dispatch) => {
  fetch("/api/persons/search/" + searchTerm)
    .then((response) => {
      console.log(response.status)
      return response.json();
    })
    .then((person) => {
      dispatch({
        type: PERSON_SEARCH,
        payload: person,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: PERSON_SEARCH_FAIL,
      });

      dispatch({
        type: ADD_ERROR,
        error: err,
      });
    });
};
