import { prisma } from "../lib/prisma";

export async function update(id: string, apartment: string) {
  return prisma.parkingSpot.update({
    where: {
      id: id,
    },
    data: {
      apartment: apartment,
    },
  });
}
