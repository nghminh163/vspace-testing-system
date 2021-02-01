import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Main from "./Main";
import Sidebar from "./Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


export default function TestScreen() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={[]} />
            <Sidebar />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
