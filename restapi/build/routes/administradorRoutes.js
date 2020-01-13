"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const administradorController_1 = __importDefault(require("../controllers/administradorController"));
//clase AdministradorRoutes
class AdministradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', administradorController_1.default.list);
        this.router.get('/:usu_id', administradorController_1.default.getOneID);
    }
}
// constante usuarioRoutes 
const administradorRoutes = new AdministradorRoutes();
exports.default = administradorRoutes.router;
