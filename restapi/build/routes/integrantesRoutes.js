"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const integrantesController_1 = __importDefault(require("../controllers/integrantesController"));
//clase IntegrantesRoutes
class IntegrantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', integrantesController_1.default.list);
        this.router.get('/:int_id', integrantesController_1.default.getOneID);
        this.router.post('/', integrantesController_1.default.create);
        this.router.put('/:int_id', integrantesController_1.default.update);
    }
}
// constante integrantesRoutes 
const integrantesRoutes = new IntegrantesRoutes();
exports.default = integrantesRoutes.router;
