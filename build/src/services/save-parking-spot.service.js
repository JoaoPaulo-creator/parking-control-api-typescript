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
exports.saveParkingSpotService = void 0;
const create_parking_spot_1 = require("../repository/create-parking-spot");
const find_licesenplate_service_1 = require("./find-licesenplate.service");
function saveParkingSpotService({ apartment, block, brandCar, colorCar, licensePlate, modelCar, parkingSpot, responsibleName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const licenseIsRegistered = yield (0, find_licesenplate_service_1.findLicensePlateService)(licensePlate);
        if (licenseIsRegistered) {
            throw new Error("License plate is already in use");
        }
        if (parkingSpot.isParkingSpotAvailable) {
            return yield (0, create_parking_spot_1.store)(apartment, block, brandCar, colorCar, licensePlate, modelCar, parkingSpot, responsibleName);
        }
        else {
            throw new Error("Spot number is not available");
        }
    });
}
exports.saveParkingSpotService = saveParkingSpotService;
