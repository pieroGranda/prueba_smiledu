"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const matriculaController_1 = __importDefault(require("../controllers/matriculaController"));
//clase MatriculaRoutes
class MatriculaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', matriculaController_1.default.list);
        this.router.get('/:usu_id', matriculaController_1.default.getOneID);
    }
}
// constante usuarioRoutes 
const matriculaRoutes = new MatriculaRoutes();
exports.default = matriculaRoutes.router;
