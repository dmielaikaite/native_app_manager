import firebase from 'firebase';
import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS } from './types';

 export const emailChanged = (text) => {
   return {
     type: EMAIL_CHANGE,
     payload: text
   };
 };

 export const passwordChanged = (text) => {
   return {
     type: PASSWORD_CHANGE,
     payload: text
   };
 };

 export const loginUser = ({ email, pass }) => {
   return (dispatch) => {
     firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
  };
 };
