"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../routes/database"));
class PlanDiarioController {
    nada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = res.json({ Message: "Ingresa un Dia en la URL",
                Formato: "http://localhost:3000/api/planDiario/dd/mm/aaaa" });
            return res.json(lista);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dia } = req.params;
            const { mes } = req.params;
            const { anu } = req.params;
            var sql = `SELECT id_planContable AS id_planDiario,
              fecha, SUM(haber) AS sum_haber,
              SUM(deber) AS sum_deber
              FROM plan_contable
              WHERE DAY(fecha)=${(dia)}
              AND MONTH(fecha)=${(mes)}
              AND YEAR(fecha)=${(anu)}
              AND estado = 1
              GROUP by DAY(fecha)`;
            const lista = yield database_1.default.query(sql);
            if (lista.length > 0) {
                return res.json(lista);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
}
const planDiarioController = new PlanDiarioController();
exports.default = planDiarioController;
