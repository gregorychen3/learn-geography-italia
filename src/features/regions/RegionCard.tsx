import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React from "react";

export interface IRegionInfo {
  name: string;
  leaderName: string;
  leaderParty: string;
  leaderTitle: string;
  populationTotal: number;
  seat: string;
  seatType: string;
  mainImage: string;
}

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

export default function RegionInfo({ regionInfo }: { regionInfo: IRegionInfo }) {
  const classes = useStyles();
  console.log(regionInfo.mainImage);

  return (
    <>
      <img src={regionInfo.mainImage} width="100%" />
      <Typography gutterBottom variant="h5" component="h2">
        {regionInfo.name}
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
    </>
  );
}

/*
  mainImage: string;
  */
