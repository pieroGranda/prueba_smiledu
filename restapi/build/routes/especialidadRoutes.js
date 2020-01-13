"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const especialidadController_1 = __importDefault(require("../controllers/especialidadController"));
//clase EspecialidadRoutes
class EspecialidadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', especialidadController_1.default.list);
        this.router.get('/:esp_id', especialidadController_1.default.getOneID);
        this.router.post('/', especialidadController_1.default.create);
        this.router.put('/:esp_id', especialidadController_1.default.update);
    }
}
// constante especialidadRoutes 
const especialidadRoutes = new EspecialidadRoutes();
exports.default = especialidadRoutes.router;
