import { Component, OnInit } from '@angular/core';
import {MetodosformularioService} from  '../metodosformulario.service';
import  { Empleados } from '../empleados';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

jefes:any= [];
mensaje:any;
mensaje2:String="";
empleadoSeleccionado = new Empleados();

  constructor(private servicioJefe:MetodosformularioService, private route:Router) { }

  ngOnInit(): void {

  	this.getJefes();
  }


getJefes(){
	this.servicioJefe.getListaJefes().subscribe(data=>{this.jefes=data} , error=>{});






}


registrar(){
	console.log(this.empleadoSeleccionado.id + " "+  this.empleadoSeleccionado.nombre+" "+this.empleadoSeleccionado.funcion+" "+
		this.empleadoSeleccionado.jefe);
	
this.servicioJefe.registrar(this.empleadoSeleccionado).subscribe(data=>{
 this.mensaje=data;
setTimeout( ()=>{ this.mensaje=null;
this.route.navigate(['/tabla']);
} ,5000);
} , error=>{});
}
}
