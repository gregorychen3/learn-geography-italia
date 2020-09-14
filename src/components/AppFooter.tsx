import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="http://www.gregory-chen.com/">
      Gregory Chen
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  footer: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {/*
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        */}
      <Copyright />
    </footer>
  );
}
