import { Injectable } from '@angular/core';

import { Tarea } from '../modelos/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
/*
  listaTareas: Tarea[]=[{
    id:'123456',
    descripcion:'Comprar pilas para el ratón',
    completada : false
  },
  {
    id:'654321',
    descripcion:'Comprar pan',
    completada : true
  },
  {
    id:'132465',
    descripcion:'Aprobar alguna asignatura',
    completada : false
  },
]*/
  
listaTareas:Tarea[]=[];
constructor() { }

getTareas(){
  var l : [] = JSON.parse(localStorage.getItem('lista') || '{}');
  if(l === null){
    this.guardarEnStorage();
  }else{
    Array.from(l).forEach(element => {
      this.listaTareas.push(element);
    });
    this.guardarEnStorage();
  }
  return this.listaTareas;
}

  anadirTarea(tarea:Tarea){
    this.listaTareas.unshift(tarea);
    this.guardarEnStorage();
  }

  completarTarea(tarea:Tarea){

    if(tarea.completada===true){
      let tareaCompletada = {id : tarea.id, descripcion : tarea.descripcion, completada: false}
      this.eliminarTarea(tarea);
      this.listaTareas.unshift(tareaCompletada);
      this.guardarEnStorage();
    }else{
      let tareaCompletada = {id : tarea.id, descripcion : tarea.descripcion, completada: true}
      this.eliminarTarea(tarea);
      this.listaTareas.push(tareaCompletada);
      this.guardarEnStorage();
    }
  }

  editarTarea(tarea:Tarea, nuevaDescrip:string){
    const index = this.listaTareas.indexOf(tarea, 0);
    if (index > -1) {
      var r = {id : tarea.id, descripcion : nuevaDescrip, completada: tarea.completada};
      this.listaTareas.splice(index, 1, r);
      }
    this.guardarEnStorage();
  }

  eliminarTarea(tarea:Tarea){
    const index = this.listaTareas.indexOf(tarea, 0);
    if (index > -1) {
        this.listaTareas.splice(index, 1);
      }
      this.guardarEnStorage();
  }

  guardarEnStorage(){
    localStorage.setItem('lista', JSON.stringify(this.listaTareas));
  }
}
