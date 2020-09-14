import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wiki from "wikijs";
import { RootState } from "../../app/store";

export interface IRegionInfo {
  name: string;
  leaderName: string;
  leaderParty: string;
  leaderTitle: string;
  populationTotal: number;
  seat: string;
  seatType: string;
}

//
// THUNKS
// ------

export const fetchRegionInfo = createAsyncThunk<IRegionInfo, string, { state: RootState }>(
  "region/fetchRegionInfo",
  async (regionName: string) => {
    const regionPage = await wiki().page(regionName);
    const {
      leaderName,
      leaderParty,
      leaderTitle,
      populationTotal,
      seat,
      seatType,
    } = (await regionPage.info()) as IRegionInfo;
    return {
      name: regionName,
      leaderName,
      leaderParty,
      leaderTitle,
      populationTotal,
      seat,
      seatType,
    } as IRegionInfo;
  },
  {
    condition: (regionName, { getState }) => {
      const { region } = getState();
      if (region[regionName]) {
        return false;
      }
    },
  }
);

//
// SLICE
// -----

interface RegionState {
  [name: string]: IRegionInfo;
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

export const selectRegionInfo = (regionName: string) => (state: RootState): IRegionInfo | undefined =>
  state.region[regionName];
