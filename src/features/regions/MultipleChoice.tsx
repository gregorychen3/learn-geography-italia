import { Grid } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RadioSVGMap } from "react-svg-map";
import MultipleChoiceQuiz from "./MultipleChoiceQuiz";
import { fetchAllRegions, selectRegionInfo } from "./regionSlice";

export default function MultipleChoice() {
  const d = useDispatch();

  useEffect(() => {
    d(fetchAllRegions());
  }, [d]);
  const [region, setRegion] = useState<string>("");

  const regionInfo = useSelector(selectRegionInfo(region));

  const handleMouseOver = async (e: any) => setRegion(e.target.getAttribute("name") ?? "");

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <MultipleChoiceQuiz />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RadioSVGMap map={Italy} onLocationMouseOver={handleMouseOver} />
      </Grid>
    </Grid>
  );
}
