import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { ListadoTareasComponent } from './componentes/listado-tareas/listado-tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    ListadoTareasComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
