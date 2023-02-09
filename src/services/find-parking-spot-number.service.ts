import { prisma } from "../lib/prisma";

export async function findParkingSpotNumberService(parkingSpotNumber: string) {
  return prisma.parkingSpot.findUnique({
    where: {
      parkingSpotNumber,
    },
  });
}
