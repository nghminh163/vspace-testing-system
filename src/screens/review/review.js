import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ready
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Click start</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
