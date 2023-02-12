import { FastifyReply, FastifyRequest } from "fastify";
import { findLicensePlateService } from "../services/find-licesenplate.service";
import { saveParkingSpotService } from "../services/save-parking-spot.service";
import { parkingSpotPaylodBody } from "../utils/create-spot-validator";

export async function saveParkingSpotController(
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

    if (parkingSpot.isParkingSpotAvailable) {
      const createParkingSpot = await saveParkingSpotService({
        apartment,
        block,
        brandCar,
        colorCar,
        licensePlate,
        modelCar,
        parkingSpot,
        responsibleName,
      });

      return reply.code(201).send({ ...createParkingSpot, parkingSpot });
    } else {
      return reply.code(400).send({ message: "Spot number is not available" });
    }
  } catch (error) {
    console.error(error);
  }
}
