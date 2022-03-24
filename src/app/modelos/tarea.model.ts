export class Tarea {
    id: string;
    descripcion:string;
    completada:boolean;

   constructor(id:string, descripcion:string, completada:boolean){
        this.id=id;
        this.descripcion=descripcion;
        this.completada=false;
   }
} 

