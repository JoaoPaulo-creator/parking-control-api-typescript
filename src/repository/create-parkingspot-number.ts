import { prisma } from "../lib/prisma";

export async function store(number: number, isParkingSpotAvailable: boolean) {
  return await prisma.parkingNumber.create({
    data: {
      number,
      isParkingSpotAvailable,
    },
  });
}
