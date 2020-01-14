import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-new-colaborador',
  templateUrl: './dialog-new-colaborador.component.html',
  styleUrls: ['./dialog-new-colaborador.component.css']
})
export class DialogNewColaboradorComponent implements OnInit {
  states: string[] = [
    'Docente', 'Coordinador', 'Director', 'Auxiliar'
  ];
  constructor() { }

  ngOnInit() {
  }

}
