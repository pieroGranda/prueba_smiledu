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
class PlanContableController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT c.id_planContable, c.detalle, c.codigo, c.fecha, c.deber, c.haber, c.estado,
              n.id_nivel, n.descripcion, n.nivel, n.padre_nivel 
              FROM plan_contable c 
              INNER JOIN nivel n 
              ON c.codigo = n.codigonivel 
              WHERE estado = 1
              ORDER BY n.id_nivel`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_planContable } = req.params;
            var sql = `SELECT c.id_planContable, c.detalle, c.codigo, c.fecha, c.deber, c.haber, c.estado,
              n.id_nivel, n.descripcion, n.nivel, n.padre_nivel
              FROM plan_contable c 
              INNER JOIN nivel n 
              ON c.codigo = n.codigonivel 
              WHERE estado = 1
              AND id_planContable = ${(id_planContable)}
              ORDER BY n.id_nivel`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `INSERT INTO plan_contable SET ?`;
            yield database_1.default.query(sql, [req.body]);
            res.json({ message: 'dato  creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_planContable } = req.params;
            yield database_1.default.query('UPDATE plan_contable set? WHERE id_planContable = ?', [req.body, id_planContable]);
            res.json({ message: "dato  actualizado" });
        });
    }
}
const planConController = new PlanContableController();
exports.default = planConController;
