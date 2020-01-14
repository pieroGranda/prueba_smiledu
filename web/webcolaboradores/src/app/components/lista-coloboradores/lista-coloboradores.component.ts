import { Component, OnInit, Inject } from '@angular/core';
import { ColaboradoresService } from '../../services/colaboradores.service'

import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';


import { from } from 'rxjs';
import { DialogNewColaboradorComponent } from 'src/app/dialog-new-colaborador/dialog-new-colaborador.component';


export class AngularMaterialModule { }

@Component({
  selector: 'app-lista-coloboradores',
  templateUrl: './lista-coloboradores.component.html',
  styleUrls: ['./lista-coloboradores.component.css']
})






export class ListaColoboradoresComponent implements OnInit {
   Colaborador: any = [];
  edit: boolean = false;


  

  constructor(
    private colaboradoresService: ColaboradoresService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public dialog:MatDialog
  ) { }

  openDialog(){ 
     this.dialog.open(DialogNewColaboradorComponent);

  }

  ngOnInit() {
    this.getColaboradores();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.colaboradoresService.getidColaborador(params.id).subscribe(
        res => {
          console.log(res);
          this.Colaborador = res;
          this.edit = true;

        },
        err => console.error(err)
      )
    }


  }
  getColaboradores() {
    this.colaboradoresService.getColaboradores().subscribe(
      res => {
        this.Colaborador = res;
      },
      err => console.error(err)

    );


  }




  deleteColaborador(id: string) {
    this.colaboradoresService.DeleteColaborador(id).subscribe(
      res => {
        console.log(res);
        this.getColaboradores();

      },
      err => console.error(err)

    )


  }
 

  

}