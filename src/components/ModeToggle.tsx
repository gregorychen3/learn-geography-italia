import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

export enum ModeRoute {
  Explore = "explore",
  MultipleChoice = "multiple-choice",
  FillIn = "fill-in",
}

interface Props {
  initialMode: ModeRoute;
  onChange: (mode: ModeRoute) => void;
}

export default function ModeToggle({ initialMode, onChange }: Props) {
  const h = useHistory();
  const { mode } = useParams<{ mode: string }>();

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMode: ModeRoute) => {
    switch (newMode) {
      case ModeRoute.Explore:
        h.push(`/regions/explore`);
        break;
      case ModeRoute.MultipleChoice:
        h.push(`/regions/multiple-choice`);
        break;
      case ModeRoute.FillIn:
        h.push(`/regions/fill-in`);
        break;
    }
  };

  console.log(mode);
  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleAlignment} size="small">
      <ToggleButton value={ModeRoute.Explore}>EXPLORE</ToggleButton>
      <ToggleButton value={ModeRoute.MultipleChoice}>MULTIPLE CHOICE</ToggleButton>
      <ToggleButton value={ModeRoute.FillIn}>FILL IN</ToggleButton>
    </ToggleButtonGroup>
  );
}
