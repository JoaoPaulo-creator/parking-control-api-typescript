import { prisma } from "../lib/prisma";

export async function index(id: string) {
  return await prisma.parkingSpot.findUnique({
    where: {
      id: id,
    },
  });
}
