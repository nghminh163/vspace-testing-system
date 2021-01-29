import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { ClaimsCheck, useUser } from "reactfire";

const Copyright = React.lazy(() => import("../../components/copyright"));
const LoginForm = React.lazy(() => import("./loginForm"));
const NotFoundTest = React.lazy(() => import("./notfoundTest"));

//TODO: Not load image if mobile
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontFamily: "'Public Sans', sans-serif",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
  },
  welcomeText: {
    letterSpacing: 0.3,
    color: theme.palette.grey[800],
  },
  brand: {
    color: purple[500],
  },
  subtitle: {
    color: theme.palette.grey[600],
  },
  copyright: {
    position: "absolute",
    bottom: 24,
    right: 0,
    left: 0,
  },
}));

export default function LoginScreen() {
  const classes = useStyles();
  const auth = useUser();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ position: "relative" }}
      >
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.welcomeText}
          >
            Welcome to <b className={classes.brand}>VSpace</b>
          </Typography>
          <Box p={1} />
          <Typography variant="subtitle2" className={classes.subtitle}>
            IELTS Testing System
          </Typography>
          <Box p={1} />
          <Box p={3} />
          {auth.data ? (
            <ClaimsCheck
              user={auth.data}
              fallback={<NotFoundTest />}
              requiredClaims={{ candidate: true }}
            >
              <p>Access grant</p>
            </ClaimsCheck>
          ) : (
            <LoginForm />
          )}
        </div>
        <div className={classes.copyright}>
          <Copyright />
        </div>
      </Grid>
    </Grid>
  );
}
