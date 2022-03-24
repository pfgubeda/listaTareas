import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea.model';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea : any;
  @ViewChild("descripTarea") descripTarea : any;
  @ViewChild("inputEditar") inputEditar: any;
  @ViewChild("nuevaD") nuevaD:any;


  constructor(private tareaService: TareasService, private renderer: Renderer2) {
    
  }

  
  ngOnInit(): void {
   
  }

  completarTarea(tarea:Tarea){
    
    this.tareaService.completarTarea(tarea);
  }

  
  modificar(){
    
    this.renderer.removeAttribute(this.inputEditar.nativeElement, "hidden");
    this.renderer.setAttribute(this.descripTarea.nativeElement, "hidden", "true");
  }

  editarTarea(nuevaDescrip:string, tarea:Tarea){
    this.renderer.removeAttribute(this.descripTarea.nativeElement, "hidden");
    this.renderer.setAttribute(this.inputEditar.nativeElement, "hidden", "true");
    this.tareaService.editarTarea(tarea, nuevaDescrip);
  }

  eliminarTarea(tarea:Tarea){
    this.tareaService.eliminarTarea(tarea);
  }

}
