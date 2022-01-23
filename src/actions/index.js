import axios from 'axios';
import { AUTH_USER, AUTH_ERR } from './types';

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/signup`, formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('user_token', response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERR, payload: 'Email in use' });
  }
}

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/signin`, formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('user_token', response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERR, payload: 'Invalid login credentials' });
  }
}

export const signout = () => {
  localStorage.removeItem('user_token');

  return {
    type: AUTH_USER,
    payload: '',
  }
}