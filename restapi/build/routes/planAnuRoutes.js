"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const planAnualController_1 = __importDefault(require("../controllers/planAnualController"));
//clase PlanAnuRoutes
class PlanAnuRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', planAnualController_1.default.nada);
        this.router.get('/:anu', planAnualController_1.default.list);
    }
}
// constante planConRoutes 
const planAnuRoutes = new PlanAnuRoutes();
exports.default = planAnuRoutes.router;
