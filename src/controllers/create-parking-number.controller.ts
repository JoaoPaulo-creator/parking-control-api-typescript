import { FastifyReply, FastifyRequest } from "fastify";
import { saveParkingSpotNumberService } from "../services/save-parking-spot-number.service";

export async function createParkingSpotNumber(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { number, isParkingSpotAvailable }: any = request.body;

  const createNumber = await saveParkingSpotNumberService(
    number,
    isParkingSpotAvailable
  );

  return reply.code(201).send(createNumber);
}
