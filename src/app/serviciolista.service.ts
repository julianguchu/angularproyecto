import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Empleados} from './empleados';

@Injectable({
  providedIn: 'root'
})
export class ServiciolistaService {

  constructor(private  http:HttpClient) { }




getEmpleados(){

return this.http.get<Empleados[]>("http://localhost:8080/listaDto");



}


}
