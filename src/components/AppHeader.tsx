import { IconButton, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExploreIcon from "@material-ui/icons/Explore";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: { marginRight: theme.spacing(2) },
}));

export default function AppHeader() {
  const classes = useStyles();
  const h = useHistory();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton edge="start" className={classes.icon} color="inherit" onClick={() => h.push("/")}>
          <ExploreIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" noWrap>
          Geografia dell'Italia
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
