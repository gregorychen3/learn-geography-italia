import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { RegionInfo } from "./types";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

export default function RegionCard({ regionInfo }: { regionInfo: RegionInfo }) {
  const classes = useStyles();
  console.log(regionInfo.mainImage);

  return (
    <Card>
      <CardMedia className={classes.media} component="img" src={regionInfo.mainImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {regionInfo.officialName}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {regionInfo.seatType}
                </TableCell>
                <TableCell>{regionInfo.seat}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Population
                </TableCell>
                <TableCell>{regionInfo.populationTotal.toLocaleString()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {regionInfo.leaderTitle}
                </TableCell>
                <TableCell>
                  {regionInfo.leaderName}, {regionInfo.leaderParty}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

/*
  mainImage: string;
  */
