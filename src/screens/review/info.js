import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useUser } from "reactfire";

export default function Information() {
  const { data: user } = useUser();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Information candidate
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            disabled
            value={user.displayName}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email address"
            fullWidth
            autoComplete="email"
            disabled
            value={user.email}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
