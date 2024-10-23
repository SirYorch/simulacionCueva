import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {

  constructor() { }
  //servicio para tener un create, readAll, readOne, y delete()
  cursos = [
    {nombre:"Quimica", desc:"Quimica experimental para prinicipiantes"},
    {nombre:"física", desc:"Leyes de Newton"},
    {nombre:"Matemáticas", desc:"Calculo Diferencial"}
  ];
  guardarCursos(cursos: any[]) {
    const cursosString = JSON.stringify(cursos);  // Convertimos el array de materias a una cadena JSON
    localStorage.setItem('materias', cursosString);  // Guardamos la cadena en el Local Storage con la clave 'materias'
  }
curso ={nombre:"asd" , desc:"asd"};
  agregar(nombr:string , descr:string){
    this.curso={
      nombre:nombr,desc:descr
    }
    this.cursos.push(this.curso);
    this.guardarCursos(this.cursos);
  }
  eliminar(){

  }
  leerTodos(){
    const cursosString = localStorage.getItem('cursos'); 
    if (cursosString) {
      this.cursos = JSON.parse(cursosString);
      console.log('Materias cargadas desde Local Storage');
    } else {
      console.log('No se encontraron materias en Local Storage');
    }
  }
  leerUno(){


  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.leerTodos();
    console.log(this.cursos)
  }
}
