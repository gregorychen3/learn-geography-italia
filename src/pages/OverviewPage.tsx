import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://www.gregory-chen.com/">
        Gregory Chen
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

interface Card {
  title: string;
  image: string;
}
const cards: Card[] = [
  {
    title: "Regions",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lazio_in_Italy.svg/250px-Lazio_in_Italy.svg.png",
  },
  {
    title: "Provinces",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roma_in_Italy.svg/250px-Roma_in_Italy.svg.png",
  },
  {
    title: "Metropolitan Cities",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Italian_regions_provinces.svg/330px-Italian_regions_provinces.svg.png",
  },
  {
    title: "Autostrade",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Italia_-_mappa_autostrade.svg/250px-Italia_-_mappa_autostrade.svg.png",
  },
  {
    title: "Rome Streets",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/PompeiiStreet.jpg",
  },
  {
    title: "Rome Metro",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Roma_-_mappa_metropolitana_%28schematica%29.png",
  },
];

export default function OverviewPage() {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Geografia dell'Italia
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Learn regions, cities, and roads of Italy
            </Typography>
            {/*<div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>*/}
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={card.image} title={card.title} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
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
      {/* End footer */}
    </>
  );
}
