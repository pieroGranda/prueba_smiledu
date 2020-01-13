"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos
const express_1 = require("express");
const rolController_1 = __importDefault(require("../controllers/rolController"));
//clase RolRoutes
class RolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rolController_1.default.list);
        this.router.get('/:rol_id', rolController_1.default.getOneID);
        this.router.post('/', rolController_1.default.create);
        this.router.put('/:rol_id', rolController_1.default.update);
    }
}
// constante rolRoutes 
const rolRoutes = new RolRoutes();
exports.default = rolRoutes.router;
