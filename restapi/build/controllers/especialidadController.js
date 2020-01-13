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
class EspecialidadController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT especialidades.esp_id, especialidades.esp_especialidad, especialidades.esp_detalle, especialidades.esp_nivel, areas.area_nombre
               FROM especialidades
               INNER JOIN areas
               ON especialidades.area_id = areas.area_id
               ORDER BY especialidades.esp_id`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { esp_id } = req.params;
            var sql = `SELECT especialidades.esp_id, especialidades.esp_especialidad, especialidades.esp_detalle, especialidad.esp_nivel, areas.area_nombre
               FROM especialidades
               INNER JOIN areas
               ON especialidades.area_id = areas.area_id
               WHERE esp_id = ${(esp_id)}
               ORDER BY esp_id`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `INSERT INTO especialidades SET ?`;
            yield database_1.default.query(sql, [req.body]);
            res.json({ message: 'El dato fue creado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_id } = req.params;
            yield database_1.default.query('UPDATE especialidades SET ? WHERE esp_id = ?', [req.body, usu_id]);
            res.json({ message: "El dato fue modificado correctamente" });
        });
    }
}
const especialidadController = new EspecialidadController();
exports.default = especialidadController;
