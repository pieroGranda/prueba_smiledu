import { Component, OnInit } from '@angular/core';

import { Route, Router } from '@angular/router'
import {ColaboradoresService} from '../../services/colaboradores.service'
import {Colaborador} from 'src/app/models/Colaboradores'
import { from } from 'rxjs';



@Component({
  selector: 'app-formulario-coloboradores',
  templateUrl: './formulario-coloboradores.component.html',
  styleUrls: ['./formulario-coloboradores.component.css']
})
export class FormularioColoboradoresComponent implements OnInit {

colaborador:Colaborador= {
  id:null,
  nombres:'',
  apellidos:'',
  cargo:'',
  correo:'',
  salario: null
}

 constructor (private  colaboradoresService:ColaboradoresService,private router:Router){}

 ngOnInit(){
   this.colaboradoresService.getColaboradores().subscribe(
    res => {
      this.colaborador = res;
    },
    err => console.log(err)
  )

   
 }
 saveNewColabarador(){
   console.log(this.colaborador);
   this.colaboradoresService.saveColoborador(this.colaborador).subscribe(
    res => {
      console.log(res);
      
    },
    err => console.error(err)

   )
   
 }

}
