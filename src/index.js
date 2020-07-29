import React from "react";
import ReactDOM from "react-dom";
import Magna from "./Magna";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./auth/firebaseConfig";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
    },
  },
});

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Magna />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
