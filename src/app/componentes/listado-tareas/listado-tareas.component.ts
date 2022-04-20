import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea.model';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

  listaTareas: any[]=[];
  constructor(private tareasService : TareasService) { 
    
  }

  ngOnInit(): void {
    this.listaTareas = this.tareasService.getTareas();
  }

}
