import { FastifyReply, FastifyRequest } from "fastify";
import { getParkingSpotsService } from "../services/get-parking.service";

export async function getCars(request: FastifyRequest, reply: FastifyReply) {
  return await getParkingSpotsService();
}
