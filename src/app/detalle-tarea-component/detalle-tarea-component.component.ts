import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-detalle-tarea-component',
  standalone: true,
  imports: [],
  templateUrl: './detalle-tarea-component.component.html',
  styleUrl: './detalle-tarea-component.component.css'
})
export class DetalleTareaComponentComponent {
  //ventana para mostrar los detalles de una tarea seleccionada
  @Input() nombreCurso:any;
  @Input() descCurso:any;
  constructor(){
    
  }
}
