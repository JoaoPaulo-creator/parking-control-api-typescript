import { FastifyInstance } from "fastify";
import { deleteParkingSpotController } from "./controllers/delete-parking-spot/delete-parking-spot.controller";
import { findOneParkingSpotController } from "./controllers/find-one-parking-spot/find-one-parking-spot.controller";
import { getCars } from "./controllers/get-parking-spot/get-parking-spot.controller";
import { saveParkingSpotController } from "./controllers/save-parking-spot/save-parking-spot.controller";
import { updateParkingSpotController } from "./controllers/update-parking-spot/update-parking-spot-.controller";

export async function routes(app: FastifyInstance) {
  app.get("/", getCars);
  app.get("/:id", findOneParkingSpotController);
  app.post("/create-parking-spot", saveParkingSpotController);
  app.patch("/update-parking-spot/:id", updateParkingSpotController);
  app.delete("/delete-parking-spot/:id", deleteParkingSpotController);
}
