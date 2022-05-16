import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Tarea } from 'src/app/modelos/tarea.model';
import { TareasService } from 'src/app/servicios/tareas.service';
@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {


  @ViewChild("nuevaTarea") nuevaTarea : any;

  constructor(private tareasService:TareasService) {
    this.nuevaTarea.nativeElement.focus();
   }

  
  ngOnInit(): void {
  }

  anadirTarea(tarea:string){

    if(tarea===''){
      alert("Escriba una tarea");
    }else{
      let nuevaTareaAdd = new Tarea(UUID.UUID(), tarea, false);
      this.tareasService.anadirTarea(nuevaTareaAdd);
      //Vaciar input de texto
      this.nuevaTarea.nativeElement.value = '';
    }
  }

  
}
