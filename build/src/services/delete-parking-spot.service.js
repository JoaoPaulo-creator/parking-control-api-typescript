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
exports.deleteParkingSpotService = void 0;
const delete_parking_spot_1 = require("../repository/delete-parking-spot");
const find_one_parkingspot_service_1 = require("./find-one-parkingspot.service");
function deleteParkingSpotService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, find_one_parkingspot_service_1.findOneParkingSpotsService)(id);
        const parkingSport = yield (0, delete_parking_spot_1.deleteSpot)(id);
        return parkingSport;
    });
}
exports.deleteParkingSpotService = deleteParkingSpotService;
