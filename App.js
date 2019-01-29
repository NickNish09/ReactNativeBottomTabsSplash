import React from 'react';
import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Home';

Navigation.registerComponentWithRedux(`Home`, () => Home);



Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component:{
        name: "Home"
      }
    }
  })
});