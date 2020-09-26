import wiki from "wikijs";
import { RegionInfo } from "./types";

const apiUrl = "https://en.wikipedia.org/w/api.php";

const getRegionInfo = async (regionName: string): Promise<RegionInfo> => {
  const regionPage = await wiki({ apiUrl }).page(regionName);
  const regionInfo: any = await regionPage.info();
  const { leaderName, leaderParty, leaderTitle, populationTotal, seat, seatType } = regionInfo;
  return { name: regionName, leaderName, leaderParty, leaderTitle, populationTotal, seat, seatType };
};

const wikipediaClient = {
  getRegionInfo,
};

export default wikipediaClient;
