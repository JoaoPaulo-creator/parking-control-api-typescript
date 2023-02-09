import { z } from "zod";

export const parkingSpotNumberPaylodBody = z.object({
  number: z.number(),
  isParkingSpotAvailable: z.boolean(),
});
