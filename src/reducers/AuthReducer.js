import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  pass: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, pass: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', pass: '', email: '' };
    default:
      return state;
  }
};
