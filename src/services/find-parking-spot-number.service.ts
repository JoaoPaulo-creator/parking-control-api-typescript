import { prisma } from "../lib/prisma";

interface SpotNumberProps {
  parkingSpot: { number: number };
}

export async function findSpotNumberService(number: number) {
  return prisma.parkingNumber.findUnique({
    where: {
      number: number,
    },
  });
}
