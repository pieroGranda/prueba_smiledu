//importamos
import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';
//clase UsuarioRoutes
class UsuarioRoutes{

    public router:Router =  Router();
    
    constructor(){
        this.config();
    }
    config():void{
         this.router.get('/list',usuarioController.list );
         this.router.get('/id/:id',usuarioController.getOneID );
         this.router.post('/create',usuarioController.create);
         this.router.put('/update/:id',usuarioController.update);
         this.router.delete('/delete/:id',usuarioController.delete);

     
        }
}

// constante usuarioRoutes 
const  usuarioRoutes = new UsuarioRoutes();
export  default  usuarioRoutes.router; 