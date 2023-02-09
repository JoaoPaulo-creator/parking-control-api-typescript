import { FastifyInstance } from "fastify";
import { createParkingSpotNumber } from "./controllers/create-parking-number.controller";
import { findOneParkingSpotController } from "./controllers/find-one-parking-spot.controller";
import { getCars } from "./controllers/get-parking-spot.controller";
import { saveParkingSpot } from "./controllers/save-parking-spot.controller";

export async function routes(app: FastifyInstance) {
  app.get("/", getCars);
  app.get("/:id", findOneParkingSpotController);
  app.post("/create-parking-spot", saveParkingSpot);
  app.post("/create-parking-number", createParkingSpotNumber);
}
