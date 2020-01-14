import { Component, OnInit } from '@angular/core';
import {Colaborador} from'../../models/Colaboradores';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import {ColaboradoresService} from'../../services/colaboradores.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-coloboradores',
  templateUrl: './perfil-coloboradores.component.html',
  styleUrls: ['./perfil-coloboradores.component.css']
})
export class PerfilColoboradoresComponent implements OnInit {

  colaborador:Colaborador;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private colaboradoresService: ColaboradoresService,
  ) { }

  ngOnInit():void {
    this.getColaborador();
  }
  getColaborador():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this .colaboradoresService.getidColaborador(id).subscribe( colaborador=>this.colaborador)
  }

}
