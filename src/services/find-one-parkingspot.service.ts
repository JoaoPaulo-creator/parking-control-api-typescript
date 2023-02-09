import { index } from "../repository/get-one-parkingspot";

export async function getOneParkingSpotsService(id: string) {
  return await index(id);
}
