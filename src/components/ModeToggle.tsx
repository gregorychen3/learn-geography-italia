import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export enum ModeRoute {
  Explore,
  MultipleChoice,
  FillIn,
}

interface Props {
  initialMode: ModeRoute;
  onChange: (mode: ModeRoute) => void;
}

export default function ModeToggle({ initialMode, onChange }: Props) {
  const h = useHistory();
  const [mode, setMode] = useState<ModeRoute>(initialMode);

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMode: ModeRoute) => {
    setMode(newMode);
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

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleAlignment} size="small">
      <ToggleButton value={ModeRoute.Explore}>EXPLORE</ToggleButton>
      <ToggleButton value={ModeRoute.MultipleChoice}>MULTIPLE CHOICE</ToggleButton>
      <ToggleButton value={ModeRoute.FillIn}>FILL IN</ToggleButton>
    </ToggleButtonGroup>
  );
}
