import{Request ,Response} from 'express';

 class  IndexController{
     
  index (req:Request ,  res:Response ){
    res.json({
      Colaboradores:        'http://localhost:5000/api/Colaboradores/list/',
      Colaboradoresid:        'http://localhost:5000/api/Colaboradores/id/:id',
      Colaboradorescreate:        'http://localhost:5000/api/Colaboradores/create/',
      Colaboradoresupdate:        'http://localhost:5000/api/Colaboradores/update/:id',
      Colaboradoresdelete:        'http://localhost:5000/api/Colaboradores/delete/:id'



             

            });
  } 
 }
export  const indexController = new  IndexController();
