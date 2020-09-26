import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { RegionInfo } from "../../types";

export default function RegionInfoCard({ regionInfo }: { regionInfo: RegionInfo }) {
  return (
    <>
      <Typography gutterBottom variant="h5" align="center">
        {regionInfo.name}
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{regionInfo.seatType}</TableCell>
              <TableCell>{regionInfo.seat}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Population</TableCell>
              <TableCell>{regionInfo.populationTotal.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{regionInfo.leaderTitle}</TableCell>
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
