"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const horarioController_1 = __importDefault(require("../controllers/horarioController"));
//clase HorarioRoutes
class HorarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', horarioController_1.default.list);
        this.router.get('/:hra_id', horarioController_1.default.getOneID);
        this.router.post('/', horarioController_1.default.create);
        this.router.put('/:hra_id', horarioController_1.default.update);
    }
}
// constante integrantesRoutes 
const horarioRoutes = new HorarioRoutes();
exports.default = horarioRoutes.router;
