import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getId() {
  return await prisma.parkingSpot.findMany();
}

async function deleteAll() {
  return await prisma.parkingSpot.deleteMany({});
}

async function deleteParkingSpot() {
  const spotId = await getId();

  console.log("Iniciando delete");

  const x = spotId.length;
  const y = 0;
  while (x >= y) {
    await deleteAll();
  }
}

deleteParkingSpot();
