import { Component } from '@angular/core';
import { DetalleTareaComponentComponent } from "../detalle-tarea-component/detalle-tarea-component.component";
import { NgModel ,FormsModule } from '@angular/forms';
import { TareaServiceService } from '../tarea-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas-component',
  standalone: true,
  imports: [DetalleTareaComponentComponent,FormsModule,CommonModule],
  templateUrl: './tareas-component.component.html',
  styleUrl: './tareas-component.component.css'
})
export class TareasComponentComponent {
  //componente de gestion de tareas, formulario para agregar y lista de tareas
  valorNombre ="";
  valorDesc="";
  
  cursos:any[] = [];
  constructor(private tareaService:TareaServiceService){
    this.cursos = tareaService.cursos;
    console.log(this.cursos);
  }
  agregar(){
    console.log("asd")
    this.tareaService.agregar(this.valorNombre,this.valorDesc);
    
    this.valorNombre="";
    this.valorDesc="";
  }
  eliminar(){

  }
}