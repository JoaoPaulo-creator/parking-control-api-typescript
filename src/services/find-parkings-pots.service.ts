import { show } from "../repository/get-all-paking-spots";

export async function getParkingSpotsService() {
  const spots = await show();

  if (spots.length == 0) {
    throw new Error("Spot list not found");
  }

  return spots;
}
