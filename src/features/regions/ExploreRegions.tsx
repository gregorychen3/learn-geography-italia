import { Grid, Typography } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React from "react";
import { RadioSVGMap } from "react-svg-map";

export default function ExploreRegions() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography align="center">foo</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap map={Italy} />
      </Grid>
    </Grid>
  );
}
