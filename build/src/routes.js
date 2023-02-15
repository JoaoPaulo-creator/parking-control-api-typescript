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
exports.routes = void 0;
const delete_parking_spot_controller_1 = require("./controllers/delete-parking-spot.controller");
const find_one_parking_spot_controller_1 = require("./controllers/find-one-parking-spot.controller");
const get_parking_spot_controller_1 = require("./controllers/get-parking-spot.controller");
const save_parking_spot_controller_1 = require("./controllers/save-parking-spot.controller");
const update_parking_spot__controller_1 = require("./controllers/update-parking-spot-.controller");
function routes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        app.get("/", get_parking_spot_controller_1.getCars);
        app.get("/:id", find_one_parking_spot_controller_1.findOneParkingSpotController);
        app.post("/create-parking-spot", save_parking_spot_controller_1.saveParkingSpotController);
        app.patch("/update-parking-spot/:id", update_parking_spot__controller_1.updateParkingSpotController);
        app.delete("/delete-parking-spot/:id", delete_parking_spot_controller_1.deleteParkingSpotController);
    });
}
exports.routes = routes;
