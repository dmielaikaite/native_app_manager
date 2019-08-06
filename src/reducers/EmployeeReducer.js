import {
  EMPLOYEES_FETCH_SUCC
 } from '../actions/types';

 const INITIAL_STATE = {};

 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case EMPLOYEES_FETCH_SUCC:
       return action.payload;
     default:
       return state;
   }
 };
