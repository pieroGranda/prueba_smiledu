"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
//clase UsuarioRoutes
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.default.list);
        this.router.get('/:id_usuario', usuarioController_1.default.getOneID);
        this.router.post('/', usuarioController_1.default.create);
        this.router.put('/:id_usuario', usuarioController_1.default.update);
    }
}
// constante usuarioRoutes 
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
