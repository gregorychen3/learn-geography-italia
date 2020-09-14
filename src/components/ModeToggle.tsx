import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { useState } from "react";

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
  const [mode, setMode] = useState<Mode>(initialMode);

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMode: Mode) => {
    setMode(newMode);
    onChange(newMode);
  };

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleAlignment} size="small">
      <ToggleButton value={Mode.Explore}>EXPLORE</ToggleButton>
      <ToggleButton value={Mode.MultipleChoice}>MULTIPLE CHOICE</ToggleButton>
      <ToggleButton value={Mode.FillIn}>FILL IN</ToggleButton>
    </ToggleButtonGroup>
  );
}
