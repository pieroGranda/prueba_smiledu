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
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT usuarios.usu_id, usuarios.usu_nombre, usuarios.usu_apellido,
               usuarios.usu_email, usuarios.usu_password, usuarios.rol_id, roles.rol_id,
               roles.nombre, usuarios.usu_estado, usuarios.usu_fecha_registro
               FROM usuarios
               INNER JOIN roles
               ON usuarios.rol_id = roles.rol_id
               WHERE usu_estado = 1
               ORDER BY usu_id`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_id } = req.params;
            var sql = `SELECT usuarios.usu_id, usuarios.usu_nombre, usuarios.usu_apellido,
               usuarios.usu_email, usuarios.usu_password, usuarios.rol_id, roles.rol_id,
               roles.nombre, usuarios.usu_estado, usuarios.usu_fecha_registro
               FROM usuarios
               INNER JOIN roles
               ON usuarios.rol_id = roles.rol_id
               WHERE usu_estado = 1
               AND usu_id = ${(usu_id)}
               ORDER BY usu_id`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `INSERT INTO usuarios SET ?`;
            yield database_1.default.query(sql, [req.body]);
            res.json({ message: 'El dato fue creado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_id } = req.params;
            yield database_1.default.query('UPDATE usuarios SET ? WHERE usu_id = ?', [req.body, usu_id]);
            res.json({ message: "El dato fue modificado correctamente" });
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_email } = req.body;
            const { usu_password } = req.body;
            var sql = `SELECT * 
              FROM usuarios 
              WHERE usu_estado = 1
              AND usu_email =  '${(usu_email)}'
              AND usu_password =  '${(usu_password)}'
              ORDER BY usu_id`;
            var login = yield database_1.default.query(sql);
            if (login.length > 0) {
                res.json({ message: 'Bienvenido Usuario' });
                console.log(login);
            }
            else {
                res.json({ message: 'El Correo Electronico o Contraseña son Incorrectos' });
            }
        });
    }
    authGet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usu_email } = req.params;
            const { usu_password } = req.params;
            var sql = `SELECT * 
              FROM usuarios 
              WHERE usu_estado = 1
              AND usu_email =  '${(usu_email)}'
              AND usu_password =  '${(usu_password)}'
              ORDER BY usu_id`;
            var login = yield database_1.default.query(sql);
            if (login.length > 0) {
                res.json({ message: 'Bienvenido Usuario' });
                console.log(login);
            }
            else {
                res.json({ message: 'El Correo Electronico o Contraseña son Incorrectos' });
            }
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
