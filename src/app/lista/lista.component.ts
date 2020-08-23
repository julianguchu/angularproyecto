import { Component, OnInit } from '@angular/core';
import  { Empleados } from '../empleados';
import {ServiciolistaService} from  '../serviciolista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 empleados:any= [];


  constructor(private  servicio:ServiciolistaService) { }

  ngOnInit(): void {
  	this.getservicio();
  }


  getservicio(){

   this.servicio.getEmpleados().subscribe(data=>{this.empleados=data} , error=>{});


  } 

}
 