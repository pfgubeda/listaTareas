import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-tareas-principal',
  templateUrl: './tareas-principal.component.html',
  styleUrls: ['./tareas-principal.component.css']
})
export class TareasPrincipalComponent implements OnInit {

  constructor( public authService:AuthService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    if(confirm("¿Estás seguro de que quieres cerrar sesión?")){
      this.authService.SignOut();
    }
  }

}
