import { z } from "zod";

export const parkingSpotPaylodBody = z.object({
  parkingSpotNumber: z.string(),
  licensePlate: z.string(),
  brandCar: z.string(),
  modelCar: z.string(),
  colorCar: z.string(),
  reponsibleName: z.string(),
  apartment: z.string(),
  block: z.string(),
});
