import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { getOneParkingSpotsService } from "../services/find-one-parkingspot.service";

const params = z.object({
  id: z.string(),
});

interface ErrorProps {
  message: Error;
}

export async function findOneParkingSpotController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = params.parse(request.params);
    const findId = await getOneParkingSpotsService(id);
    return reply.code(200).send(findId);
  } catch (error) {
    return reply.code(404).send(error);
  }
}
