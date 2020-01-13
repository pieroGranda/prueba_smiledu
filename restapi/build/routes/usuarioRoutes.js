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
        this.router.get('/list', usuarioController_1.default.list);
        this.router.get('/id/:id', usuarioController_1.default.getOneID);
        this.router.post('/create', usuarioController_1.default.create);
        this.router.put('/update/:id', usuarioController_1.default.update);
        this.router.delete('/delete/:id', usuarioController_1.default.delete);
    }
}
// constante usuarioRoutes 
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
