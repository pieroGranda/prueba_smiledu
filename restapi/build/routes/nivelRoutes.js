"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const nivelController_1 = __importDefault(require("../controllers/nivelController"));
//clase NivelRoutes
class NivelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', nivelController_1.default.list);
        this.router.get('/:codigonivel', nivelController_1.default.getOneCodigo);
        this.router.get('/:nivel/:padre_nivel', nivelController_1.default.getOneNPN);
    }
}
// constante usuarioRoutes 
const nivelRoutes = new NivelRoutes();
exports.default = nivelRoutes.router;
