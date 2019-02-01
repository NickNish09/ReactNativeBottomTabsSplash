import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Navigation } from "react-native-navigation";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
