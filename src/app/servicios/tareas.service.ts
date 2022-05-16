import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';


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

  listaTareas: Tarea[] = [];
  constructor(private firestore: AngularFirestore) {
  }


  db = getFirestore();
  

  async getAllTodos() {
    console.log("version 09/05/2022");
    const uuiduser = JSON.parse(localStorage.getItem('user')!).uid;
    this.listaTareas = [];
    try {
      const tareas = await getDocs(collection(this.db, "/users/"+uuiduser+"/Todos"));
      tareas.forEach(tarea => {
        this.listaTareas.push({
          id: tarea.id,
          descripcion: tarea.data()['descripcion'],
          completada: tarea.data()['completada']
        });
      });
      this.listaTareas.sort((a, b) => {
        if (a.completada && !b.completada) {
          return -1;
        } else if (!a.completada && b.completada) {
          return 1;
        } else {
          return 0;
        }
      }
      );
    } catch (e) {
      console.error("Error getting tareas: ", e);
    }
  }

  async eliminarTareaFirebase(tarea: Tarea) {
    const uuiduser = JSON.parse(localStorage.getItem('user')!).uid;
    try {
      await deleteDoc(doc(this.db, "/users/"+uuiduser+"/Todos", tarea.id));
      console.log("tarea eliminada en firebase " + tarea.id);
    } catch (e) {
      console.error("Error eliminando tarea: ", e);
    }

    const index = this.listaTareas.indexOf(tarea, 0);
    if (index > -1) {
      this.listaTareas.splice(index, 1);
    }
  }

  async addTareaFirebase(tarea: Tarea) {
    const uuiduser = JSON.parse(localStorage.getItem('user')!).uid;
    try {
      const tareaRef = await addDoc(collection(this.db, "/users/"+uuiduser+"/Todos"), {
        completada: tarea.completada,
        descripcion: tarea.descripcion
      });
      console.log("tarea guardada en firebase" + tareaRef.id);
      window.location.reload();
    } catch (e) {
      console.error("Error adding tarea: ", e);
    }
    this.listaTareas.unshift(tarea);
  }

  async updateTareaFirebase(tarea: Tarea) {
    const uuiduser = JSON.parse(localStorage.getItem('user')!).uid;
    try {
      const tareaId = getDocs(collection(this.db, "/users/"+uuiduser+"/Todos"));
      (await tareaId).forEach(async tarea2 => {
        if (tarea.id === tarea2.id) {
          const tarea3 = tarea2.ref;
          await updateDoc(tarea3, {
            completada: tarea.completada,
            descripcion: tarea.descripcion
          }
          
          );
        }})
        
        }catch (e) {
          console.error("Error actualizando tarea: ", e);
        }
      }


getTareas(){
        this.getAllTodos();
        return this.listaTareas;
      }

anadirTarea(tarea: Tarea){
        this.addTareaFirebase(tarea);
        return this.listaTareas;
      }

  completarTarea(tarea: Tarea){

        if(tarea.completada === true){
        let tareaCompletada = { id: tarea.id, descripcion: tarea.descripcion, completada: false }
        const index = this.listaTareas.indexOf(tarea, 0);
        if (index > -1) {
          this.listaTareas.splice(index, 1);
        } 
        this.listaTareas.unshift(tareaCompletada);
        this.updateTareaFirebase(tareaCompletada);

      }else {
        let tareaCompletada = { id: tarea.id, descripcion: tarea.descripcion, completada: true }
        const index = this.listaTareas.indexOf(tarea, 0);
        if (index > -1) {
          this.listaTareas.splice(index, 1);
        }
        this.listaTareas.push(tareaCompletada);
        this.updateTareaFirebase(tareaCompletada);
      }
    }

  editarTarea(tarea: Tarea, nuevaDescrip: string){
      const index = this.listaTareas.indexOf(tarea, 0);
      if (index > -1) {
        var r = { id: tarea.id, descripcion: nuevaDescrip, completada: tarea.completada };
        this.listaTareas.splice(index, 1, r);
        this.updateTareaFirebase(r);
      }
    }

    eliminarTarea(tarea: Tarea){
      this.eliminarTareaFirebase(tarea);
    }

    guardarEnStorage(){
      localStorage.setItem('lista', JSON.stringify(this.listaTareas));
    }

  }

