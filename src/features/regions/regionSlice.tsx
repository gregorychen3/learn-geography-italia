import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { RegionInfo } from "../../types";
import wikipediaClient from "../../wikipediaClient";
const regions = [
  "Apulia",
  "Campania",
  "Sardinia",
  "Liguria",
  "Piedmont",
  "Aosta Valley",
  "Lombardy",
  "Emilia-Romagna",
  "Trentino-South Tyrol",
  "Veneto",
  "Friuli-Venezia Giulia",
  "Tuscany",
  "Marche",
  "Umbria",
  "Lazio",
  "Abruzzo",
  "Molise",
  "Basilicata",
  "Calabria",
  "Sicily",
];

//
// THUNKS
// ------

export const fetchRegionInfo = createAsyncThunk<RegionInfo, string, { state: RootState }>(
  "region/fetchRegionInfo",
  async (regionName: string) => wikipediaClient.getRegionInfo(regionName),
  {
    condition: (regionName, { getState }) => {
      if (getState().region[regionName]) {
        return false;
      }
    },
  }
);

//
// SLICE
// -----

interface RegionState {
  [name: string]: RegionInfo;
}

const initialState: RegionState = {};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegionInfo.fulfilled, (state, action) => {
      state[action.payload.name] = action.payload;
    });
  },
});

export default regionSlice.reducer;

//
// SELECTORS
// ---------

export const selectRegionInfo = (regionName: string) => (state: RootState): RegionInfo | undefined =>
  state.region[regionName];
