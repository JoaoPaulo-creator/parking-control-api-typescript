import { FastifyReply, FastifyRequest } from "fastify";
import { updateParkingSpot } from "../services/update-paking-spot.service";

export async function updateParkingSpotController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  //

  const { id }: any = request.params;
  const { apartment }: any = request.body;

  await updateParkingSpot(id, apartment)
    .then(() => {
      return reply.code(200).send({ apartment });
    })
    .catch((err) => {
      console.log(err);
    });
}
