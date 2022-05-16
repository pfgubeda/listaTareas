import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { TareasPrincipalComponent } from './componentes/tareas-principal/tareas-principal.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginGuard } from './guards/login.guard';
import { VerifyEmailComponent } from './componentes/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './componentes/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  {path:'todos', component: TareasPrincipalComponent, canActivate: [LoginGuard]},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'verify-email-adress', component:VerifyEmailComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
  ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
