import { Injectable } from '@angular/core';

import { Tarea } from '../modelos/tarea.model';

import { initializeApp } from "firebase/app";
import { deleteDoc, doc, getDocs, getFirestore, updateDoc} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkNg2J5PEZMKYYEtCpVnuF-tHGU5xhEro",
  authDomain: "apptodo-fdd26.firebaseapp.com",
  projectId: "apptodo-fdd26",
  storageBucket: "apptodo-fdd26.appspot.com",
  messagingSenderId: "434837279908",
  appId: "1:434837279908:web:54505a25a73425a9794231",
  measurementId: "G-7J9PH1EH22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



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


  async agregarTareaAFireBase(tarea:Tarea){
  try {
    const tareaRef = await addDoc(collection(db, "tareas"), {
      completada: tarea.completada,
      titulo: tarea.descripcion
    });
    console.log("tarea guardada en firebase" + tareaRef.id);
  } catch (e) {
    console.error("Error adding tarea: ", e);
  }
}

async cargarTareasFirebase(){
  try {
    const tareas = await getDocs(collection(db, "tareas"));
    tareas.forEach(tarea => {
      this.listaTareas.push({
        id: tarea.id,
        descripcion: tarea.data()['descripcion'],
        completada: tarea.data()['completada']
      });
    });
  } catch (e) {
    console.error("Error getting tareas: ", e);
  }
}

async eliminarTareaFirebase(tarea:Tarea){
  try{
    await deleteDoc(doc(db, "tareas", tarea.id));
    console.log("tarea eliminada en firebase"+ tarea.id);
  }catch(e){
    console.error("Error eliminando tarea: ", e);
  }
}



getTareas(){
  this.cargarTareasFirebase();
  return this.listaTareas;
}

  anadirTarea(tarea:Tarea){
    this.listaTareas.unshift(tarea);
    this.agregarTareaAFireBase(tarea);
  }

  async completarTarea(tarea:Tarea){

    if(tarea.completada===true){
      const tareaRef = doc(db, tarea.descripcion);
      await updateDoc(tareaRef, {completada: false});
    }else{
      const tareaRef = doc(db, tarea.descripcion);
      await updateDoc(tareaRef, {completada: true});
    }
    this.cargarTareasFirebase();
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
    this.eliminarTareaFirebase(tarea);
  }

  guardarEnStorage(){
    localStorage.setItem('lista', JSON.stringify(this.listaTareas));
  }
}
