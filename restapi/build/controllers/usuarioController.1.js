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
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT *
              FROM usuario 
              WHERE estado = 1
              ORDER BY id_usuario`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.params;
            var sql = `SELECT * 
              FROM usuario 
              WHERE estado = 1
              AND id_usuario = ${(id_usuario)}
              ORDER BY id_usuario`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado[0]);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `INSERT INTO usuario SET ?`;
            yield database_1.default.query(sql, [req.body]);
            res.json({ message: 'dato  creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.params;
            yield database_1.default.query('UPDATE usuario SET ? WHERE id_usuario = ?', [req.body, id_usuario]);
            res.json({ message: "dato  actualizado" });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
