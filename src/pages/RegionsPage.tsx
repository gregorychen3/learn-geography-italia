import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import "react-svg-map/lib/index.css";
import ModeToggle from "../components/ModeToggle";
import ExploreRegions from "../features/regions/ExploreRegions";
import MultipleChoice from "../features/regions/MultipleChoice";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function RegionsPage() {
  const classes = useStyles();
  const h = useHistory();

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="md">
        <Box textAlign="center" marginBottom={4}>
          <ModeToggle />
        </Box>
        <Switch>
          <Route path="/regions/explore">
            <ExploreRegions />
          </Route>
          <Route path="/regions/multiple-choice">
            <MultipleChoice />
          </Route>
          <Route path="/regions/fill-in">
            <MultipleChoice />
          </Route>
          <Route path="/regions">
            <Redirect to="/regions/explore" />
          </Route>
        </Switch>
      </Container>
    </>
  );
}
