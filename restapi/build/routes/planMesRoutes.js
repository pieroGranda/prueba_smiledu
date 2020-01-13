"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const planMensualController_1 = __importDefault(require("../controllers/planMensualController"));
//clase PlanMesRoutes
class PlanMesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', planMensualController_1.default.nada);
        this.router.get('/:mes/:anu', planMensualController_1.default.list);
    }
}
// constante planConRoutes 
const planMesRoutes = new PlanMesRoutes();
exports.default = planMesRoutes.router;
