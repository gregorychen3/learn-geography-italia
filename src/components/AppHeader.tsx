import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExploreIcon from "@material-ui/icons/Explore";
import React from "react";

const useStyles = makeStyles((theme) => ({
  icon: { marginRight: theme.spacing(2) },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <ExploreIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Geografia dell'Italia
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
