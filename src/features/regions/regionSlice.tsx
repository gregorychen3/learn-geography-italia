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

export const fetchAllRegions = createAsyncThunk("region/fetchRegionInfo", async () => {
  const regionInfo = await Promise.all(regions.map((r) => wikipediaClient.getRegionInfo(r)));
  return Object.fromEntries(regions.map((r, i) => [r, regionInfo[i]]));
});

//
// SLICE
// -----

interface RegionState {
  regionInfo: { [name: string]: RegionInfo };
}

const initialState: RegionState = { regionInfo: {} };

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllRegions.fulfilled, (state, action) => {
      console.log(action.payload);
      state.regionInfo = action.payload;
    });
  },
});

export default regionSlice.reducer;

//
// SELECTORS
// ---------

export const selectRegionInfo = (regionName: string) => (state: RootState): RegionInfo | undefined =>
  state.region.regionInfo[regionName];
