"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const planDiarioController_1 = __importDefault(require("../controllers/planDiarioController"));
//clase PlanDiaRoutes
class PlanDiaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', planDiarioController_1.default.nada);
        this.router.get('/:dia/:mes/:anu', planDiarioController_1.default.list);
    }
}
// constante planConRoutes 
const planDiaRoutes = new PlanDiaRoutes();
exports.default = planDiaRoutes.router;
