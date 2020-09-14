import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React from "react";
import { RadioSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import ModeToggle, { Mode } from "../components/ModeToggle";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function RegionsPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="md">
        <Box textAlign="center" marginBottom={4}>
          <ModeToggle initialMode={Mode.Explore} onChange={() => {}} />
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <RadioSVGMap map={Italy} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadioSVGMap map={Italy} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
