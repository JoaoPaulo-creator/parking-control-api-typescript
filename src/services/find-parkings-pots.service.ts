import { show } from "../repository/get-all-paking-spots";

export async function getParkingSpotsService() {
  return await show();
}
