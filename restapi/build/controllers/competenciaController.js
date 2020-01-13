"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../routes/database"));
class CompetenciaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT competencias.comp_id, competencias.comp_detalle, areas.area_id, areas.area_nombre
               FROM competencias
               INNER JOIN areas
               ON competencias.area_id = areas.area_id
               ORDER BY competencias.comp_id`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { comp_id } = req.params;
            var sql = `SELECT competencias.comp_id, competencias.comp_detalle, areas.area_id, areas.area_nombre
               FROM competencias
               INNER JOIN areas
               ON competencias.area_id = areas.area_id
               WHERE comp_id = ${(comp_id)}
               ORDER BY comp_id`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `INSERT INTO competencias SET ?`;
            yield database_1.default.query(sql, [req.body]);
            res.json({ message: 'El dato fue creado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_id } = req.params;
            yield database_1.default.query('UPDATE competencias SET ? WHERE comp_id = ?', [req.body, usu_id]);
            res.json({ message: "El dato fue modificado correctamente" });
        });
    }
}
const competenciaController = new CompetenciaController();
exports.default = competenciaController;
