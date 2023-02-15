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
exports.deleteParkingSpotController = void 0;
const zod_1 = require("zod");
const delete_parking_spot_service_1 = require("../services/delete-parking-spot.service");
function deleteParkingSpotController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const ParamsProp = zod_1.z.object({
            id: zod_1.z.string(),
        });
        const { id } = ParamsProp.parse(request.params);
        yield (0, delete_parking_spot_service_1.deleteParkingSpotService)(id)
            .then(() => {
            return reply.code(204).send();
        })
            .catch((error) => {
            const { message } = error;
            return reply.code(404).send({ message });
        });
    });
}
exports.deleteParkingSpotController = deleteParkingSpotController;
