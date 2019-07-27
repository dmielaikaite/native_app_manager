import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  pass: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, pass: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
