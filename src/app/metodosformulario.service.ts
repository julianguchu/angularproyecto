import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Empleados} from './empleados';

@Injectable({
  providedIn: 'root'
})
export class MetodosformularioService {

  constructor(private  http:HttpClient) { }




  getListaJefes(){
return  this.http.get<Empleados[]>("http://localhost:8080/listaJefes");


  }

  registrar (empleado):Observable<String>{

return this.http.post("http://localhost:8080/guardarFormulario",empleado, {responseType: 'text'});


  }
}
