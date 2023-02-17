import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { updateParkingSpot } from "../services/update-paking-spot.service";

export async function updateParkingSpotController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  //

  const requetBody = z.object({
    apartment: z
      .string()
      .min(1, "title is required")
      .max(3, "title must be minor or equals to 3"),
  });

  try {
    const { id }: any = request.params;
    const { apartment } = requetBody.parse(request.body);

    const update = await updateParkingSpot(id, apartment).then(() => {
      return { apartment };
    });

    return update;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const { message } = error;
      return reply.code(400).send({ message });
    }
  }
}
