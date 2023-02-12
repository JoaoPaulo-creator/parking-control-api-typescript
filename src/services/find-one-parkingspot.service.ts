import { index } from "../repository/get-one-parking-spot";

export async function getOneParkingSpotsService(id: string) {
  const findSpot = await index(id);

  if (!findSpot) {
    throw new Error("Cannot find spot");
  }

  return findSpot;
}
