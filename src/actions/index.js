export const LOAD_DEFENDANTS = "LOAD_DEFENDANTS";
export const LOAD_COSIGNERS = "LOAD_COSIGNERS";

export const loadDefendantsAsync = () => async dispatch => {
  fetch("/api/defendants")
    .then(response => {
      return response.json();
    })
    .then(defendants => {
      dispatch({
        type: LOAD_DEFENDANTS,
        payload: defendants
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const loadCosignersAsync = () => async dispatch => {
  fetch("/api/cosigners")
    .then(response => {
      return response.json();
    })
    .then(cosigners => {
      dispatch({
        type: LOAD_COSIGNERS,
        payload: cosigners
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const loadHomeAsync = () => async dispatch => {
  fetch("/api/cosigners")
    .then(response => {
      return response.json();
    })
    .then(cosigners => {
      dispatch({
        type: LOAD_COSIGNERS,
        payload: cosigners
      });

      return fetch("/api/defendants");
    })
    .then(response => {
      return response.json();
    })
    .then(defendants => {
      dispatch({
        type: LOAD_DEFENDANTS,
        payload: defendants
      });
    })
    .catch(err => {
      console.log(err);
    });
};
