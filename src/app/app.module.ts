import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiciolistaService} from './serviciolista.service';
import {MetodosformularioService} from './metodosformulario.service';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [ServiciolistaService,MetodosformularioService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
