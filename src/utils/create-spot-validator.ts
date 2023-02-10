import { z } from "zod";

export const parkingSpotPaylodBody = z.object({
  parkingSpot: z.object({
    number: z.number(),
    isParkingSpotAvailable: z.boolean(),
  }),
  licensePlate: z.string(),
  brandCar: z.string(),
  modelCar: z.string(),
  colorCar: z.string(),
  responsibleName: z.string(),
  apartment: z.string(),
  block: z.string(),
});
