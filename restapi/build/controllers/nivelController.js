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
class NivelController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = `SELECT *
              FROM nivel 
              ORDER BY id_nivel`;
            const lista = yield database_1.default.query(sql);
            res.json(lista);
        });
    }
    getOneCodigo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigonivel } = req.params;
            var sql = `SELECT * 
              FROM nivel
              WHERE codigonivel = ${(codigonivel)}
              ORDER BY id_nivel`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado[0]);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
    getOneNPN(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nivel } = req.params;
            const { padre_nivel } = req.params;
            var sql = `SELECT * 
              FROM nivel
              WHERE nivel = ${(nivel)}
              AND padre_nivel = ${(padre_nivel)}
              ORDER BY id_nivel`;
            const llamado = yield database_1.default.query(sql);
            if (llamado.length > 0) {
                return res.json(llamado);
            }
            res.status(404).json({ text: "el dato no existe" });
        });
    }
}
const nivelController = new NivelController();
exports.default = nivelController;
