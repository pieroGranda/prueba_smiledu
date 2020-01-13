import{Request ,Response} from 'express';
import db from '../routes/database';
import { text, json } from 'body-parser';
import { join } from 'bluebird';

 class  UsuarioController{
     
  public  async list (req:Request ,  res:Response ){
    var sql = `SELECT id,nombres,apellidos,cargo,correo,salario FROM trabajador ORDER BY id`; 
    const lista =await db.query(sql);
    res.json(lista); 
  }

  public async getOneID(req:Request, res: Response):Promise<any>{
    const{ id }=req.params;
    var sql = `SELECT
     trabajador.id,
     trabajador.nombres,
     trabajador.apellidos,
     trabajador.cargo,
     trabajador.correo,
     trabajador.salario 
     FROM trabajador 
              where id = ${(id)}
               ORDER BY id`;
      const  llamado= await  db.query(sql);
      if (llamado.length> 0){
        return res.json(llamado);
      }
      res.status(404).json({text:"el dato no existe"});
  }

  public async create (req:Request,res:Response): Promise<void>{
    var sql = `INSERT INTO trabajador SET ?`
    await db.query(sql,[req.body]);
      res.json({message:'El dato fue creado correctamente'});
  }

  public  async update (req: Request, res :Response):Promise<void>{
    const{id} =req.params;
   await db.query('UPDATE trabajador SET ? WHERE id = ?',[req.body,id]);
    res.json({message:"El dato fue modificado correctamente"});

  } public  async delete (req: Request, res :Response):Promise<void>{
    const{id} =req.params;
   await db.query('DELETE FROM trabajador WHERE id = ?',[id]);
    res.json({message:"El dato fue eliminado correctamente"});
  }

 
 }

 const usuarioController = new  UsuarioController();
 export  default usuarioController;