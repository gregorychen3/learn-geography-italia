import { CssBaseline } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import OverviewPage from "./pages/OverviewPage";

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppHeader />
      <Switch>
        <Route path="/overview">
          <OverviewPage />
        </Route>
        <Route path="/">
          <Redirect to="/overview" />
        </Route>
      </Switch>
    </>
  );
}
