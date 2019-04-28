import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Navigation } from "react-native-navigation";
import { styles } from "./Styles";

export default class WelcomeScreen extends Component {

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
