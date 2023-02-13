import { FastifyInstance } from "fastify";
import { deleteParkingSpotController } from "./controllers/delete-parking-spot.controller";
import { findOneParkingSpotController } from "./controllers/find-one-parking-spot.controller";
import { getCars } from "./controllers/get-parking-spot.controller";
import { saveParkingSpotController } from "./controllers/save-parking-spot.controller";

export async function routes(app: FastifyInstance) {
  app.get("/", getCars);
  app.get("/:id", findOneParkingSpotController);
  app.post("/create-parking-spot", saveParkingSpotController);
  app.delete("/delete-parking-spot/:id", deleteParkingSpotController);
}
