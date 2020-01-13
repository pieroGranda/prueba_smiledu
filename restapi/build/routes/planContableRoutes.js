"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PlanContableRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('plan contable'));
    }
}
const planContableRoutes = new PlanContableRoutes();
exports.default = planContableRoutes.router;
