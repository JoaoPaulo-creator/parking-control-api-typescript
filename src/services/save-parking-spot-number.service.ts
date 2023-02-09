import { store } from "../repository/create-parkingspot-number";

export async function saveParkingSpotNumberService(
  number: number,
  isParkingSpotAvailable: boolean
) {
  return await store(number, isParkingSpotAvailable);
}
