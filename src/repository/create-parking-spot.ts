import { prisma } from "../lib/prisma";

export interface ParkingSpotProps {
  number: number;
  isParkingSpotAvailable: boolean;
}

export async function store(
  apartment: string,
  block: string,
  brandCar: string,
  colorCar: string,
  licensePlate: string,
  modelCar: string,
  parkingSpot: ParkingSpotProps, //{ number: number; isParkingSpotAvailable: boolean },
  responsibleName: string
) {
  const save = await prisma.parkingSpot.create({
    data: {
      apartment,
      block,
      brandCar,
      colorCar,
      licensePlate,
      modelCar,
      parkingSpot: {
        create: {
          number: parkingSpot.number,
          isParkingSpotAvailable: parkingSpot.isParkingSpotAvailable,
        },
      },
      responsibleName,
    },
  });
  return save;
}
