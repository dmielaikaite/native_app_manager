import firebase from 'firebase';
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

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
     dispatch({ type: LOGIN_USER });
     firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, pass)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
 };

 const loginUserSuccess = (dispatch, user) => {
   dispatch({
     type: LOGIN_USER_SUCCESS,
     payload: user
   });
 };

 const loginUserFail = (dispatch) => {
   dispatch({ type: LOGIN_USER_FAIL });
 };
