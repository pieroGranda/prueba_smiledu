import { Component, OnInit, Inject } from '@angular/core';
import { ColaboradoresService } from '../../services/colaboradores.service'

import { Router, ActivatedRoute } from '@angular/router'

import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { from } from 'rxjs';


export class AngularMaterialModule { }
@Component({
  selector: 'app-lista-coloboradores',
  templateUrl: './lista-coloboradores.component.html',
  styleUrls: ['./lista-coloboradores.component.css']
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


export class DialogContentExampleDialog { }




@Component({
  selector: 'app-lista-coloboradores',
  templateUrl: 'lista-coloboradores.component.html',
})
export class ListaColoboradoresComponent implements OnInit {
  Colaborador: any = [];
  edit: boolean = false;

  constructor(private colaboradoresService: ColaboradoresService, private router: Router, private activatedRoute: ActivatedRoute) { }



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
  saveNewColaborador() {

    delete this.Colaborador.id;
    this.colaboradoresService.saveColoborador(this.Colaborador)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/colaboradores']);

        },
        err => console.error(err)

      )
  }

  

}