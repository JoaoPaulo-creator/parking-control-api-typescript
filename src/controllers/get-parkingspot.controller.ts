import { FastifyReply, FastifyRequest } from "fastify";
import { getParkingSpotsService } from "../services/find-parkingspots.service";

export async function getCars(request: FastifyRequest, reply: FastifyReply) {
  return await getParkingSpotsService();
}
