"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateParkingSpotController = void 0;
const zod_1 = require("zod");
const update_paking_spot_service_1 = require("../services/update-paking-spot.service");
function updateParkingSpotController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        //
        const requetBody = zod_1.z.object({
            apartment: zod_1.z
                .string()
                .min(1, "title is required")
                .max(3, "title must be minor or equals to 3"),
        });
        try {
            const { id } = request.params;
            const { apartment } = requetBody.parse(request.body);
            const update = yield (0, update_paking_spot_service_1.updateParkingSpot)(id, apartment).then(() => {
                return { apartment };
            });
            return update;
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                const { message } = error;
                return reply.code(400).send({ message });
            }
        }
    });
}
exports.updateParkingSpotController = updateParkingSpotController;
