import { ParkingSpotProps, store } from "../repository/create-parking-spot";
import { findLicensePlateService } from "./find-licesenplate.service";
import { findSpotNumberService } from "./find-parking-spot-number.service";
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
  const licenseIsRegistered = await findLicensePlateService(licensePlate);
  const parkingNumberExists = await findSpotNumberService(parkingSpot.number);

  if (licenseIsRegistered) {
    throw new Error("License plate is already in use");
  }

  if (parkingNumberExists) {
    throw new Error("Spot number is not available");
  }

  if (parkingSpot.isParkingSpotAvailable) {
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
  } else {
    throw new Error("Parking Spot is not available");
  }
}
