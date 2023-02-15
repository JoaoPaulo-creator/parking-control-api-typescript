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
exports.getParkingSpotsService = void 0;
const get_all_paking_spots_1 = require("../repository/get-all-paking-spots");
function getParkingSpotsService() {
    return __awaiter(this, void 0, void 0, function* () {
        const spots = yield (0, get_all_paking_spots_1.show)();
        if (!spots) {
            throw new Error("Spot list not found");
        }
        return spots;
    });
}
exports.getParkingSpotsService = getParkingSpotsService;
