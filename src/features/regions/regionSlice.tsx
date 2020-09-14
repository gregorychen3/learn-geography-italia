import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

export interface IRegionInfo {
  name: string;
  leaderName: string;
  leaderParty: string;
  leaderTitle: string;
  populationTotal: number;
  seat: string;
  seatType: string;
}

interface RegionState {
  [name: string]: IRegionInfo;
}

const initialState: RegionState = {};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
});

export const {} = regionSlice.actions;

//
// SELECTORS
// ---------

export const selectRegionInfo = (state: RootState) => state.counter.value;

export default regionSlice.reducer;
