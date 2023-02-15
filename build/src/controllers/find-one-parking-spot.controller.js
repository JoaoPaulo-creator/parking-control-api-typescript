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
exports.findOneParkingSpotController = void 0;
const zod_1 = require("zod");
const find_one_parkingspot_service_1 = require("../services/find-one-parkingspot.service");
const params = zod_1.z.object({
    id: zod_1.z.string(),
});
function findOneParkingSpotController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = params.parse(request.params);
            const findId = yield (0, find_one_parkingspot_service_1.findOneParkingSpotsService)(id);
            return reply.code(200).send(findId);
        }
        catch (error) {
            return reply.code(404).send(error);
        }
    });
}
exports.findOneParkingSpotController = findOneParkingSpotController;
