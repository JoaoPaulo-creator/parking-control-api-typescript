import { FastifyInstance } from "fastify";
import { getCars } from "./controllers/get-parkingspot.controller";

import { saveParkingSpot } from "./controllers/save-parkingspot.controller";

export async function routes(app: FastifyInstance) {
  app.get("/", getCars);
  app.post("/create-paking-spot", saveParkingSpot);
}
