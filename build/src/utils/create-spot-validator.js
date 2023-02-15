"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkingSpotPaylodBody = void 0;
const zod_1 = require("zod");
exports.parkingSpotPaylodBody = zod_1.z.object({
    parkingSpot: zod_1.z.object({
        number: zod_1.z.number(),
        isParkingSpotAvailable: zod_1.z.boolean(),
    }),
    licensePlate: zod_1.z.string(),
    brandCar: zod_1.z.string(),
    modelCar: zod_1.z.string(),
    colorCar: zod_1.z.string(),
    responsibleName: zod_1.z.string(),
    apartment: zod_1.z.string(),
    block: zod_1.z.string(),
});
