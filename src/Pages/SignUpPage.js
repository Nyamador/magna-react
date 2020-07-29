import React, {useState} from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  makeStyles,
  SnackbarContent,
  Snackbar,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Link as RouterLink, Redirect} from "react-router-dom";

function SignUpPage() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [snackBarOpened, setsnackBarOpened] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(credentials => {
        console.log(credentials);
        setisAuthenticated(true);
        setError(false);
        setsnackBarOpened(false);
      })
      .catch(function (error) {
        // Handle Errors here.
        setError(true);
        setsnackBarOpened(true);
        setisAuthenticated(false);
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
    console.log(email, password);
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <RouterLink to="/login">
                <Link variant="body2">{"Have an account? Log In"}</Link>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
        {error ? (
          <Snackbar
            message="An error occurred trying to log you in"
            autoHideDuration={6000}
            open={snackBarOpened}
            onClose={() => {
              setsnackBarOpened(false);
            }}
          />
        ) : (
          <Snackbar
            message="Login Successful"
            autoHideDuration={6000}
            open={snackBarOpened}
            onClose={() => {
              setsnackBarOpened(false);
            }}
          />
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Magna Technologies
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const firebaseConfig = {
//   apiKey: "AIzaSyDB_12E0_gCDrj9Ofoi9VyWSI1HhSnFEYA",
//   authDomain: "magna-3d0be.firebaseapp.com",
//   databaseURL: "https://magna-3d0be.firebaseio.com",
//   projectId: "magna-3d0be",
//   storageBucket: "magna-3d0be.appspot.com",
//   messagingSenderId: "206805306542",
//   appId: "1:206805306542:web:f97e41210f64c4a479b13f",
//   measurementId: "G-MC1SZTE2WN",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default SignUpPage;
