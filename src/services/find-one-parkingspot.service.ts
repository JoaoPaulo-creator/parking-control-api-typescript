import { index } from "../repository/get-one-parking-spot";

export async function getOneParkingSpotsService(id: string) {
  return await index(id);
}
