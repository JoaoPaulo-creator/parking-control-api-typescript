import { prisma } from "../lib/prisma";

export async function store(
  apartment: string,
  block: string,
  brandCar: string,
  colorCar: string,
  licensePlate: string,
  modelCar: string,
  parkingSpotNumber: string,
  reponsibleName: string
) {
  const save = await prisma.parkingSpot.create({
    data: {
      apartment: apartment,
      block: block,
      brandCar: brandCar,
      colorCar: colorCar,
      licensePlate: licensePlate,
      modelCar: modelCar,
      parkingSpotNumber: parkingSpotNumber,
      reponsibleName: reponsibleName,
    },
  });
  return save;
}
