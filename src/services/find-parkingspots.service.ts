import { show } from "../repository/get-all-pakingspot";

export async function getParkingSpotsService() {
  return await show();
}
