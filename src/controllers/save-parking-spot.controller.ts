import { FastifyReply, FastifyRequest } from "fastify";
import { findLicensePlateService } from "../services/find-licesenplate.service";
import { parkingSpotPaylodBody } from "../utils/create-spot-validator";

import { prisma } from "../lib/prisma";

export async function saveParkingSpot(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    apartment,
    block,
    brandCar,
    colorCar,
    licensePlate,
    modelCar,
    parkingSpot,
    responsibleName,
  } = parkingSpotPaylodBody.parse(request.body);

  try {
    const licenseIsRegistered = await findLicensePlateService(licensePlate);

    if (licenseIsRegistered) {
      return reply
        .code(422)
        .send({ message: "A license plate is already informed" });
    }

    const createParkingSpot = await prisma.parkingSpot.create({
      data: {
        apartment,
        block,
        brandCar,
        colorCar,
        licensePlate,
        modelCar,
        parkingSpot: {
          create: {
            number: parkingSpot.number,
            isParkingSpotAvailable: parkingSpot.isParkingSpotAvailable,
          },
        },
        responsibleName,
      },
    });

    return reply.code(201).send({ ...createParkingSpot, parkingSpot });
  } catch (error) {
    console.error(error);
  }
}
