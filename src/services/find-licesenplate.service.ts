import { prisma } from "../lib/prisma";

export async function findLicensePlateService(licensePlate: string) {
  return prisma.parkingSpot.findUnique({
    where: {
      licensePlate,
    },
  });
}
