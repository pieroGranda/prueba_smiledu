import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {coerceNumberProperty} from '@angular/cdk/coercion';




@Component({
  selector: 'app-dialog-new-colaborador',
  templateUrl: './dialog-new-colaborador.component.html',
  styleUrls: ['./dialog-new-colaborador.component.css']
})
export class DialogNewColaboradorComponent implements OnInit {
  max = 2000;
  min = 500;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  states: string[] = [
    'Docente', 'Coordinador', 'Director', 'Auxiliar'
  ];

 
  


getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  constructor() { }

  ngOnInit() {
  }

}
