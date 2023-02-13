import { deleteSpot } from "../repository/delete-parking-spot";
import { getOneParkingSpotsService } from "./find-one-parkingspot.service";

export async function deleteParkingSpotService(id: string) {
  await getOneParkingSpotsService(id);

  const parkingSport = await deleteSpot(id);

  return parkingSport;
}
