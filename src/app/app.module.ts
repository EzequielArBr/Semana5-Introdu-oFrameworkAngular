import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDeCursosComponent } from './lista-de-cursos/lista-de-cursos.component';
import { TopoComponent } from './topo/topo.component';
import { ListaDeProfessoresComponent } from './lista-de-professores/lista-de-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeCursosComponent,
    ListaDeProfessoresComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
