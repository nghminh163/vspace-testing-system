import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Sound from "react-sound";
import { useStorage } from "reactfire";

export default function Testing() {
  const storage = useStorage();
  const [audioTest, setAudioTest] = useState(null);
  useEffect(() => {
    storage
      .refFromURL(
        "gs://vspacevn-testing-system.appspot.com/sample-test-listening.ogg"
      )
      .getDownloadURL()
      .then((url) => setAudioTest(url));
  }, [storage]);
  const [isPlaying, setPlaying] = useState(false);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Test your device
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {audioTest && (
            <>
              <Typography>
                Put on your headphones and click on the Play sound button to
                play a sample sound.
              </Typography>
              <Box p={1} />
              <Button
                variant="contained"
                onClick={() => setPlaying(!isPlaying)}
              >
                {isPlaying ? "Stop" : "Play"} sound
              </Button>
              <Sound
                url={audioTest}
                playStatus={
                  isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
                }
              />
              <Box p={1} />
              <Typography>
                If you CANNOT hear anything, please change device to Chrome (PC,
                Android) or Firefox. iOS devices does NOT support :{"<"}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
