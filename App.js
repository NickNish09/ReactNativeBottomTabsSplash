import { Navigation } from "react-native-navigation";
import Home from "./src/screens/Home";
import Welcome from "./src/screens/Authentication/Welcome";
import SignIn from "./src/screens/Authentication/SignIn";
import SignUp from "./src/screens/Authentication/SignUp";
import Profile from "./src/screens/Profile/Profile";
import {colors} from "./src/styles/base";

Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent("Welcome", () => Welcome);
Navigation.registerComponent("SignIn", () => SignIn);
Navigation.registerComponent("SignUp", () => SignUp);
Navigation.registerComponent("Profile", () => Profile);


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
                    name: "Home",
                    options: {
                      topBar: {
                        rightButtons: [
                          {
                            id: "buttonOne",
                            icon: require("./src/assets/images/explore.png"),
                            color: "white"
                          }
                        ],
                        title: {
                          text: "Perguntas",
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
                  text: "Perguntas",
                  textColor: "white",
                  selectedTextColor: colors.secondary,
                  selectedIconColor: colors.secondary,
                  icon: require("./src/assets/images/explore.png")
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Welcome",
                    options: {
                      topBar: {
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
                  text: "Favoritas",
                  textColor: "white",
                  selectedTextColor: colors.secondary,
                  selectedIconColor: colors.secondary,
                  icon: require("./src/assets/images/star.png")
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "Profile",
                    options: {
                      topBar: {
                        title: {
                          text: "Perfil",
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
                  text: "Perfil",
                  textColor: "white",
                  selectedTextColor: colors.secondary,
                  selectedIconColor: colors.secondary,
                  icon: require("./src/assets/images/profile.png")
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
