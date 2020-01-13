"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const estudianteController_1 = __importDefault(require("../controllers/estudianteController"));
//clase EstudianteRoutes
class EstudianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', estudianteController_1.default.list);
        this.router.get('/:usu_id', estudianteController_1.default.getOneID);
    }
}
// constante usuarioRoutes 
const estudianteRoutes = new EstudianteRoutes();
exports.default = estudianteRoutes.router;
