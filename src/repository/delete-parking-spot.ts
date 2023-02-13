import { prisma } from "../lib/prisma";

export async function deleteSpot(id: string) {
  return prisma.parkingSpot.delete({
    where: {
      id: id,
    },
  });
}
