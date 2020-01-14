import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-eliminar',
  templateUrl: './dialog-eliminar.component.html',
  styleUrls: ['./dialog-eliminar.component.css']
})
export class DialogEliminarComponent implements OnInit {
  states: string[] = [
    'Docente', 'Coordinador', 'Director', 'Auxiliar'
  ];
  constructor() { }

  ngOnInit() {
  }

}
