import { prisma } from "../lib/prisma";

export async function getParkingSpotsService() {
  return await prisma.parkingSpot.findMany();
}
