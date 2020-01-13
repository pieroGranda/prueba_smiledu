"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const areaController_1 = __importDefault(require("../controllers/areaController"));
//clase AreasRoutes
class AreasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', areaController_1.default.list);
        this.router.get('/:area_id', areaController_1.default.getOneID);
        this.router.post('/', areaController_1.default.create);
        this.router.put('/:area_id', areaController_1.default.update);
    }
}
// constante areaRoutes 
const areaRoutes = new AreasRoutes();
exports.default = areaRoutes.router;
