import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const actionTypes = {};
actionTypes.FETCHING_SMURFS = 'FETCHING_SMURFS';
actionTypes.ADDING_SMURF = 'ADDING_SMURF';
actionTypes.DELETING_SMURF = 'DELETING_SMURF';
actionTypes.UPDATING_SMURF = 'UPDATING_SMURF';
actionTypes.SET_SMURFS = 'SET_SMURFS';
actionTypes.SUCCESS = 'SUCCESS';
actionTypes.ERROR = 'ERROR';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const createAPIUrl = (...paths) => {
  let url = 'http://localhost:3333/smurfs'
  if (paths) {
    paths.forEach(path => {
      url = url.concat(`/${path}`)
    })
  }
  return url;
}

export const setSmurfs = (smurfs) => {
  return {
    type: actionTypes.SET_SMURFS,
    payload: smurfs,
  };
}

export const setError = (error) => {
  return {
    type: actionTypes.ERROR,
    payload: error,
  };
}

export const requestSuccess = () => {
  return {
    type: actionTypes.SUCCESS,
  };
}

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: actionTypes.FETCHING_SMURFS });
  return axios
    .get(createAPIUrl())
    .then(res => {
      dispatch(setSmurfs(res.data));
      dispatch(requestSuccess());
    })
    .catch(error => {
      dispatch(setError(error.message));
    })
};

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: actionTypes.DELETING_SMURF });
  return axios
    .delete(createAPIUrl(id))
    .then(res => {
      dispatch(setSmurfs(res.data));
      dispatch(requestSuccess());
    })
    .catch(error => {
      dispatch(setError(error.message));
    })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: actionTypes.ADDING_SMURF });
  return axios
    .post(createAPIUrl(), smurf)
    .then(res => {
      dispatch(setSmurfs(res.data));
      dispatch(requestSuccess());
    })
    .catch(error => {
      dispatch(setError(error.message));
    })
} 