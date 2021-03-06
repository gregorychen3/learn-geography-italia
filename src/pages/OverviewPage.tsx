import { CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";

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
}));

interface Card {
  title: string;
  subtitle: string;
  image: string;
  route: string;
}
const cards: Card[] = [
  {
    title: "Regions (20)",
    subtitle: "The first-level constituent entities of the Italian Republic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lazio_in_Italy.svg/250px-Lazio_in_Italy.svg.png",
    route: "/regions",
  },
  {
    title: "Provinces (107)",
    subtitle:
      "The constituent entities of the Italian Republic, on an intermediate level between a municipality (comune) and a region (regione)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roma_in_Italy.svg/250px-Roma_in_Italy.svg.png",
    route: "/provinces",
  },
  {
    title: "Metropolitan Cities (10)",
    subtitle: "Administrative divisions of Italy; a special type of province",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Italian_regions_provinces.svg/330px-Italian_regions_provinces.svg.png",
    route: "/metropolitan-cities",
  },
  {
    title: "Autostrade",
    subtitle: "Italian national system of motorways",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Italia_-_mappa_autostrade.svg/250px-Italia_-_mappa_autostrade.svg.png",
    route: "/autostrade",
  },
  {
    title: "Rome Metro",
    subtitle: "Rapid transit system in Rome, Italy",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Roma_-_mappa_metropolitana_%28schematica%29.png",
    route: "/rome-metro",
  },
  {
    title: "Rome Streets",
    subtitle: "The main ones...",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/PompeiiStreet.jpg",
    route: "/rome-streets",
  },
];

export default function OverviewPage() {
  const classes = useStyles();
  const h = useHistory();

  return (
    <>
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
              <Card className={classes.card} onClick={() => h.push(card.route)}>
                <CardActionArea>
                  <CardMedia className={classes.cardMedia} image={card.image} title={card.title} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.subtitle}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
