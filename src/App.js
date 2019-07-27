import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBrG0l5j1howupuob7UjWV8sgCWyUIpFwk',
      authDomain: 'manager-b653c.firebaseapp.com',
      databaseURL: 'https://manager-b653c.firebaseio.com',
      projectId: 'manager-b653c',
      storageBucket: 'manager-b653c.appspot.com',
      messagingSenderId: '533078284314',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
       <LoginForm />
      </Provider>
    );
  }
}

export default App;
