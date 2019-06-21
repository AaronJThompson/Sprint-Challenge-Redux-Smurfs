import { actionTypes as types } from '../actions';
import { combineReducers } from 'redux';
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialData = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  currentSmurf: null,
  error: null,
}

export default function smurfReducer(state = initialData, action) {
  switch(action.type) {

    case(types.FETCHING_SMURFS):
      return { ...state, fetchingSmurfs: true };
    case(types.ADDING_SMURF):
      return { ...state, addingSmurf: true };
    case(types.DELETING_SMURF):
      return { ...state, deletingSmurf: true };
    case(types.UPDATING_SMURF):
      return { ...state, updatingSmurf: true };
    case(types.SET_SMURFS):
      return { ...state, smurfs: action.payload };
    case(types.EDIT_SMURF):
      return { ...state, currentSmurf: action.payload };
    case(types.SUCCESS):
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        currentSmurf: null,
        error: null,
      };
    case(types.ERROR):
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        currentSmurf: null,
        error: action.payload,
      };
    default:
      return state;
  }
}