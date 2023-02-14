import { update } from "../repository/update-parking-spot";
import { findOneParkingSpotsService } from "./find-one-parkingspot.service";

export async function updateParkingSpot(id: string, apartment: string) {
  const idExists = await findOneParkingSpotsService(id);

  if (!idExists) {
    throw new Error("Spot not found");
  }

  const updateData = await update(id, apartment);
  return updateData;
}
