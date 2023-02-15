import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { findOneParkingSpotsService } from "../../services/find-one-parkingspot.service";

const params = z.object({
  id: z.string(),
});

export async function findOneParkingSpotController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = params.parse(request.params);
    const findId = await findOneParkingSpotsService(id);
    return reply.code(200).send(findId);
  } catch (error) {
    return reply.code(404).send(error);
  }
}
