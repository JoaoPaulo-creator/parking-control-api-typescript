import { FastifyReply, FastifyRequest } from "fastify";
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
  } catch (error) {
    return reply.code(400).send(error);
  }
}
