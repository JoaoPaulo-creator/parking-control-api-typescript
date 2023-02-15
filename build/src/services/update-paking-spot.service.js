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
exports.updateParkingSpot = void 0;
const update_parking_spot_1 = require("../repository/update-parking-spot");
const find_one_parkingspot_service_1 = require("./find-one-parkingspot.service");
function updateParkingSpot(id, apartment) {
    return __awaiter(this, void 0, void 0, function* () {
        const idExists = yield (0, find_one_parkingspot_service_1.findOneParkingSpotsService)(id);
        if (!idExists) {
            throw new Error("Spot not found");
        }
        const updateData = yield (0, update_parking_spot_1.update)(id, apartment);
        return updateData;
    });
}
exports.updateParkingSpot = updateParkingSpot;
