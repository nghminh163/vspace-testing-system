import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useAuth } from "reactfire";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const useStyles = makeStyles((theme) => ({
  introduction: {
    color: theme.palette.grey[800],
  },
}));
export default function LoginForm() {
  const classes = useStyles();
  const auth = useAuth;

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <>
      <Typography variant="subtitle2" className={classes.introduction}>
        Please login with Facebook or Email linked
      </Typography>
      <Box p={1} />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </>
  );
}
