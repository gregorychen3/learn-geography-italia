import { Box, Container, makeStyles } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Italy from "@svg-maps/italy";
import React, { useState } from "react";
import { RadioSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

enum Mode {
  Explore,
  MultipleChoice,
  FillIn,
}

const ModeToggle = () => {
  const [mode, setMode] = useState<Mode>(Mode.Explore);
  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMode: Mode) => setMode(newMode);

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleAlignment} size="small">
      <ToggleButton value={Mode.Explore}>EXPLORE</ToggleButton>
      <ToggleButton value={Mode.MultipleChoice}>MULTIPLE CHOICE</ToggleButton>
      <ToggleButton value={Mode.FillIn}>FILL IN</ToggleButton>
    </ToggleButtonGroup>
  );
};

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function RegionsPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="sm">
        <Box textAlign="center" marginBottom={4}>
          <ModeToggle />
        </Box>
        <RadioSVGMap map={Italy} />
      </Container>
    </>
  );
}
