import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

export enum ModeRoute {
  Explore = "explore",
  MultipleChoice = "multiple-choice",
  FillIn = "fill-in",
}

export default function ModeToggle() {
  const h = useHistory();
  const { mode } = useParams<{ mode: string }>();

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMode: ModeRoute) => {
    switch (newMode) {
      case ModeRoute.Explore:
        h.push(`/regions/${ModeRoute.Explore}`);
        break;
      case ModeRoute.MultipleChoice:
        h.push(`/regions/${ModeRoute.MultipleChoice}`);
        break;
      case ModeRoute.FillIn:
        h.push(`/regions/${ModeRoute.FillIn}`);
        break;
    }
  };

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleAlignment} size="small">
      <ToggleButton value={ModeRoute.Explore}>EXPLORE</ToggleButton>
      <ToggleButton value={ModeRoute.MultipleChoice}>MULTIPLE CHOICE</ToggleButton>
      <ToggleButton value={ModeRoute.FillIn}>FILL IN</ToggleButton>
    </ToggleButtonGroup>
  );
}
