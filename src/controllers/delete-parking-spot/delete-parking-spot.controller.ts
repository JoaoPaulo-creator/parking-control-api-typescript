import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { deleteParkingSpotService } from "../../services/delete-parking-spot.service";

export async function deleteParkingSpotController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const ParamsProp = z.object({
    id: z.string(),
  });

  const { id } = ParamsProp.parse(request.params);
  await deleteParkingSpotService(id)
    .then(() => {
      return reply.code(204).send();
    })
    .catch((error) => {
      const { message }: any = error;
      return reply.code(404).send({ message });
    });
}
