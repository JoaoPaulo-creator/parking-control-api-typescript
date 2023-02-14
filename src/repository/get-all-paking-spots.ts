import { prisma } from "../lib/prisma";

export async function show() {
  return prisma.parkingSpot.findMany({
    include: {
      parkingSpot: true,
    },
  });
}
