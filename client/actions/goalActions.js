import axios from 'axios';
import { getUserId } from '../helpers/stateHelpers';

export function createGoal(data) { // create a single goal
  const headers = { Authorization: `Bearer ${window.localStorage.userToken}` };
  return dispatch => axios.post('/api/goals/create', data, { headers })
    .then((response) => {
      dispatch({ type: 'CREATE_GOAL_SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_GOAL_FAILED', payload: err });
    });
}

export function fetchGoals() { // provide all goals specific to user
  const headers = { Authorization: `Bearer ${window.localStorage.userToken}` };
  return (dispatch, getState) => axios.get(`/api/goals?user_id=${getUserId(getState)}`, { headers })
    .then((response) => {
      dispatch({ type: 'FETCH_GOALS_SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_GOALS_FAILED', payload: err });
    });
}

export function updateGoal(data) { // update a single goal
  const headers = { Authorization: `Bearer ${window.localStorage.userToken}` };
  return dispatch => axios.put('/api/goals/update', data, { headers })
    .then((response) => {
      dispatch({ type: 'UPDATE_GOAL_SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'UPDATE_GOAL_FAILED', payload: err });
    });
}
