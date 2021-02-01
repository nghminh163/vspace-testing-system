import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          Question Palette
        </Typography>
        <div style={{ textAlign: "center" }}>
          {Array(50)
            .fill(1)
            .map((v, i) => (
              <span
                style={{
                  backgroundColor: "#32b3c7",
                  width: "28px",
                  height: "28px",
                  display: "inline-block",
                  margin: "10px 4px 0px 4px",
                  lineHeight: "30px",
                  fontSize: "14px",
                  fontWeight: "700",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                {i}
              </span>
            ))}
        </div>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
