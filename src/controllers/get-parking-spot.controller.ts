import { FastifyReply, FastifyRequest } from "fastify";
import { getParkingSpotsService } from "../services/find-parkings-pots.service";

export async function getCars(request: FastifyRequest, reply: FastifyReply) {
  return await getParkingSpotsService();
}
