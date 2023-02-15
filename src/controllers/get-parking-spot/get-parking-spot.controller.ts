import { FastifyReply, FastifyRequest } from "fastify";
import { getParkingSpotsService } from "../../services/find-parkings-pots.service";

export async function getCars(request: FastifyRequest, reply: FastifyReply) {
  try {
    return await getParkingSpotsService();
  } catch (error) {
    return reply.code(404).send(error);
  }
}
