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
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ForgotPasswordComponent } from './componentes/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './componentes/verify-email/verify-email.component';
import { AuthService } from './servicios/auth.service';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    ListadoTareasComponent,
    TareaComponent,
    LoginComponent,
    TareasPrincipalComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
