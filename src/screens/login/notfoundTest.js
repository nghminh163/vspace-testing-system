import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import red from "@material-ui/core/colors/red";
import { useAuth } from "reactfire";
import Button from "@material-ui/core/Button";
import "firebase/auth";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  error: {
    color: red[500],
  },
}));
export default function NotFoundTest() {
  const classes = useStyles();
  const auth = useAuth();
  return (
    <>
      <Typography variant="subtitle2" className={classes.error}>
        Test not found in this account. You can contact for VSpace team
      </Typography>
      <Box p={1} />

      <Button onClick={() => auth.signOut()}>Change another account</Button>
    </>
  );
}
