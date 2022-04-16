import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';
import { ListadoTareasComponent } from './componentes/listado-tareas/listado-tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { LoginComponent } from './componentes/login/login.component';
import { TareasPrincipalComponent } from './componentes/tareas-principal/tareas-principal.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './componentes/registro/registro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    ListadoTareasComponent,
    TareaComponent,
    LoginComponent,
    TareasPrincipalComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
