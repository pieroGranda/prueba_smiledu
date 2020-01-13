"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            Colaboradores: 'http://localhost:5000/api/Colaboradores/list/',
            Colaboradoresid: 'http://localhost:5000/api/Colaboradores/id/:id',
            Colaboradorescreate: 'http://localhost:5000/api/Colaboradores/create/',
            Colaboradoresupdate: 'http://localhost:5000/api/Colaboradores/update/:id',
            Colaboradoresdelete: 'http://localhost:5000/api/Colaboradores/delete/:id'
        });
    }
}
exports.indexController = new IndexController();
