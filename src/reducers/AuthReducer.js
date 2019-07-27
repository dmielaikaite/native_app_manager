import { EMAIL_CHANGE } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
