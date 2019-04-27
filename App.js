import { Navigation } from "react-native-navigation";
import Home from "./src/screens/Home";
import Welcome from "./src/screens/Authentication/Welcome";
import SignIn from "./src/screens/Authentication/SignIn";
import SignUp from "./src/screens/Authentication/SignUp";
import {colors} from "./src/styles/base";

Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent("Welcome", () => Welcome);
Navigation.registerComponent("SignIn", () => SignIn);
Navigation.registerComponent("SignUp", () => SignUp);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      animate: false,
      elevation: 0,
      title: {
        alignment: "center"
      }
    }
  });
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Welcome",
                    options: {
                      topBar: {
                        rightButtons: [
                          {
                            id: "buttonOne",
                            icon: require("./src/assets/icons/sendIcon.png"),
                            color: "white"
                          }
                        ],
                        title: {
                          text: "Wyr",
                          color: "white"
                        },
                        background: {
                          color: colors.primary_dark
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: "Home",
                  textColor: "white",
                  selectedTextColor: colors.secondary,
                  selectedIconColor: colors.secondary,
                  icon: require("./src/assets/icons/sendIcon.png")
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Home",
                    options: {
                      topBar: {
                        rightButtons: [
                          {
                            id: "buttonOne",
                            icon: require("./src/assets/icons/sendIcon.png"),
                            color: "white"
                          }
                        ],
                        title: {
                          text: "Wyr",
                          color: "white"
                        },
                        background: {
                          color: colors.primary_dark
                        }
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: "Index",
                  textColor: "white",
                  selectedTextColor: colors.secondary,
                  selectedIconColor: colors.secondary,
                  icon: require("./src/assets/icons/sendIcon.png")
                }
              }
            }
          },
        ],
        options: {
          bottomTabs: {
            backgroundColor: colors.dark
          }
        }
      }
    }
  });
});
