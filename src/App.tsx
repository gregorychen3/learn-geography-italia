import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Overview from "./pages/Overview";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/">
          <Redirect to="/overview" />
        </Route>
      </Switch>
    </>
  );
}
