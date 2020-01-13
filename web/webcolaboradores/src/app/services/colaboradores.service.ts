import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Colaborador}  from '../models/Colaboradores';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  API_URL='http://localhost:5000/api/Colaboradores'
  constructor(private  http:HttpClient) { }

  getColaboradores(){
    return this.http.get(`${this.API_URL}/list`);
  }
  getidColaborador(id:string){
      return  this.http.get(`${this.API_URL}/id/${id}`)
  }
  saveColoborador(colaborador:Colaborador){
    return this.http.post(`${this.API_URL}/create`,colaborador);
  }

  DeleteColaborador(id:string){
    return  this.http.delete(`${this.API_URL}/delete/${id}`);
}

updateColaborador(id,updateColaborador):Observable<Colaborador>{
  return  this.http.put(`${this.API_URL}/delete/${id}`,updateColaborador);
}
}
