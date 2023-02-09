import { FastifyInstance } from "fastify";
import { findOneParkingSpotController } from "./controllers/find-one-parkingspot.controller";
import { getCars } from "./controllers/get-parkingspot.controller";
import { saveParkingSpot } from "./controllers/save-parkingspot.controller";

export async function routes(app: FastifyInstance) {
  app.get("/", getCars);
  app.get("/:id", findOneParkingSpotController);
  app.post("/create-paking-spot", saveParkingSpot);
}
