import { prisma } from "../lib/prisma";

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
  return prisma.parkingSpot.create({
    data: {
      apartment,
      block,
      brandCar,
      colorCar,
      licensePlate,
      modelCar,
      parkingSpotNumber,
      reponsibleName,
    },
  });
}
