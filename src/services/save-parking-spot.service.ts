import { store } from "../repository/create-parking-spot";

export async function saveParkingSpotService({
  apartment,
  block,
  brandCar,
  colorCar,
  licensePlate,
  modelCar,
  parkingSpotNumber,
  reponsibleName,
}: any) {
  return await store(
    apartment,
    block,
    brandCar,
    colorCar,
    licensePlate,
    modelCar,
    parkingSpotNumber,
    reponsibleName
  );
}
