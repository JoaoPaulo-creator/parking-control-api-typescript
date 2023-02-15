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
exports.findOneParkingSpotsService = void 0;
const get_one_parking_spot_1 = require("../repository/get-one-parking-spot");
function findOneParkingSpotsService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const findSpot = yield (0, get_one_parking_spot_1.index)(id);
        if (!findSpot) {
            throw new Error("Cannot find spot");
        }
        return findSpot;
    });
}
exports.findOneParkingSpotsService = findOneParkingSpotsService;
