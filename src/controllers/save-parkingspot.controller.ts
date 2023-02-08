import { FastifyReply, FastifyRequest } from "fastify";
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

  return reply.send(createParkingSpot);
}
