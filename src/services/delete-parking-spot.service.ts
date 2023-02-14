import { deleteSpot } from "../repository/delete-parking-spot";
import { findOneParkingSpotsService } from "./find-one-parkingspot.service";

export async function deleteParkingSpotService(id: string) {
  await findOneParkingSpotsService(id);

  const parkingSport = await deleteSpot(id);

  return parkingSport;
}
