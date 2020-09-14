import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "react-svg-map/lib/index.css";
import ModeToggle, { Mode } from "../components/ModeToggle";
import ExploreRegions from "../features/regions/ExploreRegions";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function RegionsPage() {
  const classes = useStyles();
  const [mode, setMode] = useState<Mode>(Mode.Explore);

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="md">
        <Box textAlign="center" marginBottom={4}>
          <ModeToggle initialMode={Mode.Explore} onChange={(m) => setMode(m)} />
        </Box>
        {mode === Mode.Explore && <ExploreRegions />}
      </Container>
    </>
  );
}
