import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loading from "../../components/loading";
import AppContainer from "../../containers/AppContainer";
import SkillType from "../../enum/skill_type";
import { Subscribe } from "unstated";

const Copyright = React.lazy(() => import("../../components/copyright"));
const Listening = React.lazy(() => import("./Listening"));
const Reading = React.lazy(() => import("./Reading"));
const Speaking = React.lazy(() => import("./Speaking"));
const Writing = React.lazy(() => import("./Writing"));

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Listening", "Reading", "Writing", "Speaking"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Listening />;
    case 1:
      return <Reading />;
    case 2:
      return <Writing />;
    case 3:
      return <Speaking />;
    default:
      throw new Error("Unknown step");
  }
}

export default function PreTestScreen() {
  const classes = useStyles();
  const handleNext = () => {
    switch (AppContainer.state.done_skills.length) {
      case 0:
        return AppContainer.setSkill(SkillType.LISTENING);
      case 1:
        return AppContainer.setSkill(SkillType.READING);
      case 2:
        return AppContainer.setSkill(SkillType.WRITING);
      case 3:
        return AppContainer.setSkill(SkillType.SPEAKING);
      case 4:
        return console.log("Done");
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <React.Fragment>
      <Subscribe to={[AppContainer]}>
        {(appState) => (
          <>
            <CssBaseline />
            <AppBar
              position="absolute"
              color="default"
              className={classes.appBar}
            >
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Company name
                </Typography>
              </Toolbar>
            </AppBar>
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                  Test
                </Typography>
                <Stepper
                  activeStep={appState.state.done_skills.length}
                  className={classes.stepper}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <React.Fragment>
                  {appState.state.done_skills.length !== steps.length && (
                    <Suspense fallback={<Loading />}>
                      {getStepContent(appState.state.done_skills.length)}
                    </Suspense>
                  )}
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {appState.state.done_skills.length === steps.length
                        ? "Done"
                        : "Start"}
                    </Button>
                  </div>
                </React.Fragment>
              </Paper>
              <Copyright />
            </main>
          </>
        )}
      </Subscribe>
    </React.Fragment>
  );
}
