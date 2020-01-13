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
class AdministradorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT usuarios.usu_id, usuarios.usu_nombre, usuarios.usu_apellido, roles.nombre, usuarios.usu_estado
               FROM usuarios
               INNER JOIN roles
               ON usuarios.rol_id = roles.rol_id
               WHERE usuarios.usu_estado = 1
               AND usuarios.rol_id = 1
               ORDER BY usuarios.usu_id`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_id } = req.params;
            var sql = `SELECT usuarios.usu_id, usuarios.usu_nombre, usuarios.usu_apellido, roles.nombre, usuarios.usu_estado
               FROM usuarios
               INNER JOIN roles
               ON usuarios.rol_id = roles.rol_id
               WHERE usuarios.usu_estado = 1
               AND usuarios.usu_id = ${(usu_id)}
               AND usuarios.rol_id = 1
               ORDER BY usuarios.usu_id`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
}
const administradorController = new AdministradorController();
exports.default = administradorController;
