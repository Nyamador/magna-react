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
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpened, setsnackBarOpened] = useState(false);
  const [credentials, setCredentials] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(credentials => {
        console.log(credentials);
        setCredentials(credentials);
        setisAuthenticated(true);
        setError(false);
        setsnackBarOpened(false);
      })
      .catch(function (error) {
        // Handle Errors here.
        setError(true);
        setsnackBarOpened(true);
        setisAuthenticated(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          setErrorMessage("Your Password is too Weak");
        } else if (errorCode === "auth/invalid-email") {
          setErrorMessage("You entered a wrong email");
        } else if (errorCode === "auth/network-request-failed") {
          setErrorMessage("A network error occurred when fetching your request");
        } else {
          setErrorMessage("We're having problems creating your account");
          console.log(errorCode, errorMessage);
          console.log(email, password);
        }
      });
  };

  return isAuthenticated ? (
    <Redirect to={{pathname: "/", state: {from: {...credentials, isAuthenticated: isAuthenticated}}}} />
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
                <Typography component="p" variant="body2" color="inherit">
                  Have an account? Log In"
                </Typography>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
        {error ? (
          <Snackbar
            message={errorMessage}
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

export default SignUpPage;
