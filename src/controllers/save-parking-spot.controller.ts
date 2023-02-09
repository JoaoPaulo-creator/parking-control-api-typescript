import { FastifyReply, FastifyRequest } from "fastify";
import { findLicensePlateService } from "../services/find-licesenplate.service";
import { findParkingSpotNumberService } from "../services/find-parking-spot-number.service";
import { saveParkingSpotService } from "../services/save-parking-spot.service";
import { parkingSpotPaylodBody } from "../utils/create-spot-validator";

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
    parkingSpotNumber,
    reponsibleName,
  } = parkingSpotPaylodBody.parse(request.body);

  try {
    const licenseIsRegistered = await findLicensePlateService(licensePlate);
    const pakingSpotNumberIsOccupied = await findParkingSpotNumberService(
      parkingSpotNumber
    );

    if (licenseIsRegistered) {
      return reply
        .code(422)
        .send({ message: "A license plate is already informed" });
    }

    if (pakingSpotNumberIsOccupied) {
      return reply
        .code(422)
        .send({ message: "Parking Spot is currently occupied" });
    }

    const createParkingSpot = await saveParkingSpotService({
      apartment,
      block,
      brandCar,
      colorCar,
      licensePlate,
      modelCar,
      parkingSpotNumber,
      reponsibleName,
    });

    return reply.code(201).send(createParkingSpot);
  } catch (error) {
    console.error(error);
  }
}
