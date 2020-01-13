"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const planContableController_1 = __importDefault(require("../controllers/planContableController"));
//clase PlanConRoutes
class PlanConRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', planContableController_1.default.list);
        this.router.get('/:id_planContable', planContableController_1.default.getOneID);
        this.router.post('/', planContableController_1.default.create);
        this.router.put('/:id_planContable', planContableController_1.default.update);
    }
}
// constante planConRoutes 
const planConRoutes = new PlanConRoutes();
exports.default = planConRoutes.router;
