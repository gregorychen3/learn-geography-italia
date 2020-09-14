import { Grid, Typography } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React, { useState } from "react";
import { RadioSVGMap } from "react-svg-map";

interface RegionInfo {
  name: string;
}

export default function ExploreRegions() {
  const [regionInfo, setRegionInfo] = useState<RegionInfo | undefined>();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography align="center">{regionInfo}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap
          map={Italy}
          onLocationMouseOver={(e) => {
            const target: SVGGraphicsElement = e.target;
            setRegionInfo({ name: e.name });
          }}
        />
      </Grid>
    </Grid>
  );
}
