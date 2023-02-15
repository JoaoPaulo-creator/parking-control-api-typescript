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
exports.saveParkingSpotController = void 0;
const save_parking_spot_service_1 = require("../services/save-parking-spot.service");
const create_spot_validator_1 = require("../utils/create-spot-validator");
function saveParkingSpotController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const { apartment, block, brandCar, colorCar, licensePlate, modelCar, parkingSpot, responsibleName, } = create_spot_validator_1.parkingSpotPaylodBody.parse(request.body);
        try {
            const createParkingSpot = yield (0, save_parking_spot_service_1.saveParkingSpotService)({
                apartment,
                block,
                brandCar,
                colorCar,
                licensePlate,
                modelCar,
                parkingSpot,
                responsibleName,
            });
            return reply.code(201).send(Object.assign(Object.assign({}, createParkingSpot), { parkingSpot }));
        }
        catch (error) {
            return reply.code(400).send(error);
        }
    });
}
exports.saveParkingSpotController = saveParkingSpotController;
