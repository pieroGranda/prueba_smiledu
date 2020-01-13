"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const competenciaController_1 = __importDefault(require("../controllers/competenciaController"));
//clase CompetenciaRoutes
class CompetenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', competenciaController_1.default.list);
        this.router.get('/:comp_id', competenciaController_1.default.getOneID);
        this.router.post('/', competenciaController_1.default.create);
        this.router.put('/:comp_id', competenciaController_1.default.update);
    }
}
// constante competenciaRoutes 
const competenciaRoutes = new CompetenciaRoutes();
exports.default = competenciaRoutes.router;
