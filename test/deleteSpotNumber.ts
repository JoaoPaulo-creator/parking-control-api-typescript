import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getParkingNumber() {
  return await prisma.parkingNumber.findMany();
}

async function deleteParkingNumber() {
  const spotNumberId = await getParkingNumber();
  const idList = spotNumberId.map((spot) => spot.id);

  console.log("Iniciando delete");

  for (let i = 0; i < idList.length; i++) {
    await prisma.parkingNumber.deleteMany({});
  }
}

deleteParkingNumber();
