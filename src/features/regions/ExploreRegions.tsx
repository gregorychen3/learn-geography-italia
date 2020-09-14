import { Grid, Typography } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React, { useState } from "react";
import { RadioSVGMap } from "react-svg-map";

export default function ExploreRegions() {
  const [region, setRegion] = useState<string | null>(null);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography align="center">{region}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap
          map={Italy}
          onLocationMouseOver={(e) => {
            const target: SVGGraphicsElement = e.target;
            setRegion(target.getAttribute("name"));
          }}
        />
      </Grid>
    </Grid>
  );
}
