import { Grid } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RadioSVGMap } from "react-svg-map";
import RegionInfo from "./RegionCard";
import { fetchRegionInfo, selectRegionInfo } from "./regionSlice";

export default function ExploreRegions() {
  const d = useDispatch();

  const [region, setRegion] = useState<string>("");

  const regionInfo = useSelector(selectRegionInfo(region));

  const handleMouseOver = async (e: any) => {
    const region = e.target.getAttribute("name");
    if (!region) {
      return;
    }
    setRegion(region);
    d(fetchRegionInfo(region));
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        {regionInfo && <RegionInfo regionInfo={regionInfo} />}
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap map={Italy} onLocationMouseOver={handleMouseOver} />
      </Grid>
    </Grid>
  );
}
