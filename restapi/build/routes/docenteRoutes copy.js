"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const docenteController_1 = __importDefault(require("../controllers/docenteController"));
//clase DocenteRoutes
class DocenteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', docenteController_1.default.list);
        this.router.get('/:usu_id', docenteController_1.default.getOneID);
    }
}
// constante usuarioRoutes 
const docenteRoutes = new DocenteRoutes();
exports.default = docenteRoutes.router;
