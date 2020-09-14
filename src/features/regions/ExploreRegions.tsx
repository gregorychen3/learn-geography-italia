import { Grid } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React, { useState } from "react";
import { RadioSVGMap } from "react-svg-map";
import wiki from "wikijs";
import RegionCard from "./RegionCard";
import { RegionInfo } from "./types";

export default function ExploreRegions() {
  const [regionInfo, setRegionInfo] = useState<RegionInfo | undefined>();

  const handleMouseOver = async (e: any) => {
    const region = e.target.getAttribute("name");
    if (!region) {
      return;
    }

    const regionPage = await wiki().page(region);
    const info = await regionPage.info();
    const mainImage = await regionPage.mainImage();
    setRegionInfo({
      name: region,
      ...info,
      mainImage,
    } as RegionInfo);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        {regionInfo && <RegionCard regionInfo={regionInfo} />}
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap map={Italy} onLocationMouseOver={handleMouseOver} />
      </Grid>
    </Grid>
  );
}
