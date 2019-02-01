import { Navigation } from "react-native-navigation";
import Home from "./src/screens/Home";
import Welcome from "./src/screens/Authentication/Welcome";
import { SignIn } from "./src/screens/Authentication/SignIn";
import { SignUp } from "./src/screens/Authentication/SignUp";

Navigation.registerComponentWithRedux(`Home`, () => Home);
Navigation.registerComponentWithRedux("Welcome", () => Welcome);
Navigation.registerComponentWithRedux("SignIn", () => SignIn);
Navigation.registerComponentWithRedux("SignUp", () => SignUp);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Welcome"
            }
          }
        ]
      }
    }
  });
});
