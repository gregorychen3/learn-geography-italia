import { Grid, Typography } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React, { useState } from "react";
import { RadioSVGMap } from "react-svg-map";
import wiki from "wikijs";

interface RegionInfo {
  officialName: string;
  leaderName: string;
  leaderParty: string;
  leaderTitle: string;
  populationAsOf: number;
  populationTotal: number;
  seat: string;
  seatTyle: string;
  mainImage: string;
}

export default function ExploreRegions() {
  const [regionInfo, setRegionInfo] = useState<RegionInfo | undefined>();

  const handleMouseOver = async (e: any) => {
    const target: SVGGraphicsElement = e.target;
    const region = target.getAttribute("name");
    if (!region) {
      return;
    }
    wiki()
      .page(region)
      .then((page) => page.info())
      .then((info) => setRegionInfo(info as RegionInfo));
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography align="center">
          <pre>{JSON.stringify(regionInfo, null, 2)}</pre>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap map={Italy} onLocationMouseOver={handleMouseOver} />
      </Grid>
    </Grid>
  );
}
