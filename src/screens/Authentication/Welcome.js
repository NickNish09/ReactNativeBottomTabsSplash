import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Navigation } from "react-native-navigation";
import { styles } from "./Styles";

import SplashScreen from "react-native-splash-screen";

export default class WelcomeScreen extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    setInterval(() => {
      SplashScreen.hide();
    }, 3000);
  }

  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: screenName
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen</Text>
        <Button title="Sign In" onPress={() => this.goToScreen("SignIn")} />
        <Button title="Sign Up" onPress={() => this.goToScreen("SignUp")} />
      </View>
    );
  }
}
