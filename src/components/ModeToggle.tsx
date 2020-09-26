import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export enum Mode {
  Explore,
  MultipleChoice,
  FillIn,
}

interface Props {
  initialMode: Mode;
  onChange: (mode: Mode) => void;
}

export default function ModeToggle({ initialMode, onChange }: Props) {
  const h = useHistory();
  const [mode, setMode] = useState<Mode>(initialMode);

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMode: Mode) => {
    setMode(newMode);
    switch (newMode) {
      case Mode.Explore:
        h.push(`/regions/explore`);
        break;
      case Mode.MultipleChoice:
        h.push(`/regions/multiple-choice`);
        break;
      case Mode.FillIn:
        h.push(`/regions/fill-in`);
        break;
    }
  };

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleAlignment} size="small">
      <ToggleButton value={Mode.Explore}>EXPLORE</ToggleButton>
      <ToggleButton value={Mode.MultipleChoice}>MULTIPLE CHOICE</ToggleButton>
      <ToggleButton value={Mode.FillIn}>FILL IN</ToggleButton>
    </ToggleButtonGroup>
  );
}
