import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Preload from './src/screens/Preload';

const AppNavigator = createStackNavigator({
  Preload: {
    screen: Preload
  }
});

const AppContanier = createAppContainer(AppNavigator);

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContanier />
      </Provider>
    );
  }
  
}