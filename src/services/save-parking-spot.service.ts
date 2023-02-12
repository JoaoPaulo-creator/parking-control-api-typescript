import { ParkingSpotProps, store } from "../repository/create-parking-spot";

export interface ServiceProps {
  apartment: string;
  block: string;
  brandCar: string;
  colorCar: string;
  licensePlate: string;
  modelCar: string;
  parkingSpot: ParkingSpotProps;
  responsibleName: string;
}

export async function saveParkingSpotService({
  apartment,
  block,
  brandCar,
  colorCar,
  licensePlate,
  modelCar,
  parkingSpot,
  responsibleName,
}: ServiceProps) {
  return await store(
    apartment,
    block,
    brandCar,
    colorCar,
    licensePlate,
    modelCar,
    parkingSpot,
    responsibleName
  );
}
