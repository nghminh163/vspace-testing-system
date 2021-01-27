import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useAudio from "../../hooks/audio";
import Box from "@material-ui/core/Box";

export default function Testing() {
  const [isPlay, toggle] = useAudio(
    "https://s3-eu-west-1.amazonaws.com/oep2stt/sample-listening-multiple-choice-one-answer/sample-audio.ogg"
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Test your device
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
            Put on your headphones and click on the Play sound button to play a
            sample sound.
          </Typography>
          <Box p={1} />
          <Button variant="contained" onClick={toggle}>
            {isPlay ? "Stop" : "Start"} sound
          </Button>
          <Box p={1} />
          <Typography>
            If you CANNOT hear anything, please change device to Chrome (PC,
            Android) or Firefox. iOS devices does NOT support :{"<"}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
